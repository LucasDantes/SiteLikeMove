const WHATSAPP_NUMBER = "5541996863820";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const message = link.dataset.message || "Ola! Vim pelo site do Studio Like Moove.";
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
