const projects = [
  {
    name: "TechStyle Store",
    description: "A responsive electronics storefront with product cards, cart flow, and a clean premium presentation.",
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    link: "https://tech-style.netlify.app/",
  },
  {
    name: "Analytics Dashboard",
    description: "A modern multi-page dashboard interface with cards, orders, analytics, and dark/light mode support.",
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    link: "https://dash-flow.netlify.app/",
  },
  // {
  //   name: "Creative Portfolio",
  //   description: "A bold personal portfolio layout inspired by premium visual design with strong typography and interaction.",
  //   stack: ["HTML5", "Tailwind CSS", "JavaScript"],
  //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  //   link: "#",
  // },
];

// const testimonials = [
//   {
//     stars: "★★★★★",
//     text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying and printing.",
//     name: "Sam Freeman",
//     role: "Business Manager CEO",
//   },
//   {
//     stars: "★★★★★",
//     text: "A clean process, quick delivery, and visuals that felt premium from the first review round.",
//     name: "Sara Freeman",
//     role: "Product Manager",
//   },
//   {
//     stars: "★★★★★",
//     text: "Great communication and strong eye for layout, spacing, and product-focused presentation.",
//     name: "John Carter",
//     role: "Creative Director",
//   },
// ];

const projectsGrid = document.getElementById("projectsGrid");
const openContactModalButton = document.getElementById("openContactModal");
const openResumeModalButton = document.getElementById("openResumeModal");
const contactModal = document.getElementById("contactModal");
const resumeModal = document.getElementById("resumeModal");
const closeModalButtons = document.querySelectorAll(".close-modal");
const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");
const contactSubmit = document.getElementById("contactSubmit");

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="panel-card overflow-hidden rounded-[1.6rem] border border-white/5 bg-panelSoft shadow-card">
          <img class="h-60 w-full object-cover" src="${project.image}" alt="${project.name}" />
          <div class="space-y-4 p-6">
            <h3 class="text-2xl font-semibold text-white">${project.name}</h3>
            <p class="text-sm leading-7 text-textMuted">${project.description}</p>
            <div class="flex flex-wrap gap-2">
              ${project.stack
                .map(
                  (item) => `
                    <span class="rounded-full bg-accent/15 px-3 py-2 text-xs font-medium text-accent">${item}</span>
                  `
                )
                .join("")}
            </div>
            <a href="${project.link}" target="_blank" class="panel-card inline-flex rounded-xl bg-accent px-5 py-3 font-semibold text-page shadow-glow">
              View Project
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.classList.remove("modal-open");
}

openContactModalButton?.addEventListener("click", () => openModal(contactModal));
openResumeModalButton?.addEventListener("click", () => openModal(resumeModal));

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(document.getElementById(button.dataset.close));
  });
});

document.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    closeModal(contactModal);
  }

  if (event.target === resumeModal) {
    closeModal(resumeModal);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(contactModal);
    closeModal(resumeModal);
  }
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries());

  contactFormStatus.textContent = "Sending your message...";
  contactSubmit.disabled = true;
  contactSubmit.classList.add("opacity-70", "cursor-not-allowed");

  try {
    const response = await fetch("https://formsubmit.co/ajax/m.imn20004@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.success !== false) {
      contactFormStatus.textContent = "Message sent successfully.";
      contactForm.reset();
    } else {
      contactFormStatus.textContent = result.message || "Something went wrong while sending the message.";
    }
  } catch (error) {
    contactFormStatus.textContent = "Unable to send right now. Please check your connection or try again later.";
  } finally {
    contactSubmit.disabled = false;
    contactSubmit.classList.remove("opacity-70", "cursor-not-allowed");
  }
});

renderProjects();
