const form = document.getElementById("contentForm");
const fields = {
  type: document.getElementById("contentType"),
  badge: document.getElementById("contentBadge"),
  titleFr: document.getElementById("contentTitleFr"),
  titleEn: document.getElementById("contentTitleEn"),
  copyFr: document.getElementById("contentCopyFr"),
  copyEn: document.getElementById("contentCopyEn"),
  image: document.getElementById("contentImage"),
};

function refreshStats() {
  const content = getStoredContent();
  const count = Object.values(content).reduce((total, list) => total + list.length, 0);
  const emails = JSON.parse(localStorage.getItem("ivoireNewsletter") || "[]");
  document.getElementById("statPosts").textContent = count;
  document.getElementById("statNewsletter").textContent = emails.length;
}

function clearEditor() {
  form.reset();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const content = getStoredContent();
  content[fields.type.value].unshift({
    badge: fields.badge.value,
    title: {
      fr: fields.titleFr.value,
      en: fields.titleEn.value,
    },
    copy: {
      fr: fields.copyFr.value,
      en: fields.copyEn.value,
    },
    image: fields.image.value,
  });
  saveStoredContent(content);
  clearEditor();
  refreshStats();
  alert("Contenu publié. Il apparaît maintenant sur le site dans ce navigateur.");
});

document.getElementById("clearForm").addEventListener("click", clearEditor);

document.getElementById("resetContent").addEventListener("click", () => {
  saveStoredContent(structuredClone(IVOIRE_DEFAULT_CONTENT));
  refreshStats();
  alert("Contenu réinitialisé.");
});

document.getElementById("googleAuthButton").addEventListener("click", () => {
  localStorage.setItem("ivoireAdminSession", JSON.stringify({ provider: "Emergent Google Auth", date: new Date().toISOString() }));
  alert("Session admin simulée. Branchez Emergent Google Auth pour une connexion réelle.");
});

document.getElementById("generateAi").addEventListener("click", async () => {
  const prompt = document.getElementById("aiPrompt").value.trim();
  const output = document.getElementById("aiOutput");
  if (!prompt) {
    output.innerHTML = "<p>Ajoutez un brief pour générer un brouillon.</p>";
    return;
  }

  output.innerHTML = "<p>Génération en cours avec le mode démo Claude Sonnet 4.5...</p>";

  const draft = (await requestAiDraft(prompt)) || generateLocalDraft(prompt);
  output.innerHTML = `
    <div class="draft-card">
      <span class="tag">${draft.badge}</span>
      <h3>${draft.title.fr}</h3>
      <p>${draft.copy.fr}</p>
      <button class="secondary-btn" type="button" id="useDraft">Utiliser dans l'éditeur</button>
    </div>
  `;
  document.getElementById("useDraft").addEventListener("click", () => {
    fields.type.value = draft.type;
    fields.badge.value = draft.badge;
    fields.titleFr.value = draft.title.fr;
    fields.titleEn.value = draft.title.en;
    fields.copyFr.value = draft.copy.fr;
    fields.copyEn.value = draft.copy.en;
  });
});

function generateLocalDraft(prompt) {
  const lower = prompt.toLowerCase();
  const type = lower.includes("emploi") || lower.includes("formation") || lower.includes("business") ? "opportunities" : "news";
  const badge = lower.includes("formation") ? "Formation" : lower.includes("emploi") ? "Emploi" : lower.includes("business") ? "Business" : "Tendance";

  return {
    type,
    badge,
    title: {
      fr: `${badge}: une nouvelle opportunité attire la jeunesse ivoirienne`,
      en: `${badge}: a new opportunity draws Ivorian youth attention`,
    },
    copy: {
      fr: `À partir du brief: "${prompt}", ce brouillon met en avant l’impact concret, les bénéfices et l’appel à l’action pour une audience jeune, ambitieuse et connectée.`,
      en: `Based on the brief: "${prompt}", this draft highlights concrete impact, benefits and a clear call to action for a young, ambitious and connected audience.`,
    },
  };
}

async function requestAiDraft(prompt) {
  try {
    const response = await fetch("/api/ai/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: "emergent-universal-llm-key",
        model: "claude-sonnet-4.5",
        languageMode: "fr-en",
        prompt,
      }),
    });
    if (!response.ok) return null;
    const data = await response.json();
    return {
      type: data.type || "news",
      badge: data.badge || "Tendance",
      title: data.title,
      copy: data.copy,
    };
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 650));
    return null;
  }
}

refreshStats();
