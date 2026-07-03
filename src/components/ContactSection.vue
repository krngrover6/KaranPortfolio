<template>
  <section class="text-white mt-20" id="contact">
    <h2 class="text-3xl sm:text-4xl font-bold text-white text-left mb-4 px-4">
      📬 Let's
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >Connect</span
      >
    </h2>

    <div class="relative px-4 mt-8" data-aos="zoom-in-up">
      <!-- Decorative Gradient -->
      <div
        class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2 pointer-events-none"
      ></div>

      <!-- Unified Panel -->
      <div
        class="relative z-10 rounded-2xl border border-[#232323] bg-[#151515] overflow-hidden"
      >
        <div class="grid md:grid-cols-2 items-stretch">
          <!-- Left: Intro + Info -->
          <div
            class="p-5 sm:p-7 md:p-10 md:border-r border-[#232323] flex flex-col"
          >
            <p
              class="text-xl sm:text-2xl font-semibold leading-snug text-white max-w-sm"
            >
              Got a project in mind? Let's talk
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >about it.</span
              >
            </p>
            <p class="text-[#adb7be] leading-relaxed mt-3 max-w-sm">
              Whether it's a question, a collaboration, or just to say hi — use
              the form or reach out directly below.
            </p>

            <div class="mt-8 space-y-5 md:mt-auto md:pt-8">
              <!-- Email -->
              <a
                :href="`mailto:${EMAIL_ADDRESS}`"
                target="_blank"
                class="flex items-center gap-4 group"
              >
                <div
                  class="w-11 h-11 shrink-0 rounded-full bg-[#232323] border border-[#2b2b2b] flex items-center justify-center group-hover:border-primary transition-colors"
                >
                  <Mail class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="text-sm text-gray-400">Email</h3>
                  <p
                    class="text-white group-hover:text-primary transition-colors"
                  >
                    {{ EMAIL_ADDRESS }}
                  </p>
                </div>
              </a>

              <!-- LinkedIn -->
              <a
                :href="LINKEDIN_URL"
                target="_blank"
                rel="noreferrer nofollow noindex"
                class="flex items-center gap-4 group"
              >
                <div
                  class="w-11 h-11 shrink-0 rounded-full bg-[#232323] border border-[#2b2b2b] flex items-center justify-center group-hover:border-primary transition-colors"
                >
                  <Linkedin class="w-5 h-5 text-white" />
                </div>
                <div class="min-w-0">
                  <h3 class="text-sm text-gray-400">LinkedIn</h3>
                  <p
                    class="text-white group-hover:text-primary transition-colors truncate"
                  >
                    {{ LINKEDIN_USERNAME }}
                  </p>
                </div>
              </a>

              <!-- GitHub -->
              <a
                :href="GITHUB_URL"
                target="_blank"
                rel="noreferrer nofollow noindex"
                class="flex items-center gap-4 group"
              >
                <div
                  class="w-11 h-11 shrink-0 rounded-full bg-[#232323] border border-[#2b2b2b] flex items-center justify-center group-hover:border-primary transition-colors"
                >
                  <Github class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="text-sm text-gray-400">GitHub</h3>
                  <p
                    class="text-white group-hover:text-primary transition-colors"
                  >
                    {{ GITHUB_USERNAME }}
                  </p>
                </div>
              </a>

              <!-- Resume -->
              <a
                :href="resumeUrl"
                target="_blank"
                rel="noreferrer nofollow noindex"
                class="flex items-center gap-4 group"
              >
                <div
                  class="w-11 h-11 shrink-0 rounded-full bg-[#232323] border border-[#2b2b2b] flex items-center justify-center group-hover:border-primary transition-colors"
                >
                  <FileText class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="text-sm text-gray-400">Resume</h3>
                  <p
                    class="text-white group-hover:text-primary transition-colors"
                  >
                    Download CV
                  </p>
                </div>
              </a>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="p-5 sm:p-7 md:p-10 bg-[#121212] flex flex-col">
            <form class="flex flex-col grow" novalidate @submit="handleSubmit">
              <div class="mb-5">
                <label
                  for="email"
                  class="text-white block mb-2 text-base font-semibold"
                  >Email</label
                >
                <input
                  v-model.trim="form.email"
                  type="email"
                  id="email"
                  class="bg-[#1e1e1e] border text-gray-100 text-base rounded-lg block w-full p-3 placeholder-[#9CA2A9] focus:outline-none transition-colors"
                  :class="
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#2b2b2b] focus:border-primary'
                  "
                  placeholder="email@gmail.com"
                  name="email"
                  @blur="validateField('email')"
                />
                <p v-if="errors.email" class="mt-1.5 text-xs text-red-400">
                  {{ errors.email }}
                </p>
              </div>

              <div class="mb-5">
                <label
                  for="subject"
                  class="text-white block mb-2 text-base font-semibold"
                  >Subject</label
                >
                <input
                  v-model.trim="form.subject"
                  type="text"
                  id="subject"
                  maxlength="120"
                  class="bg-[#1e1e1e] border text-gray-100 text-base rounded-lg block w-full p-3 placeholder-[#9CA2A9] focus:outline-none transition-colors"
                  :class="
                    errors.subject
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#2b2b2b] focus:border-primary'
                  "
                  placeholder="Your subject here"
                  name="subject"
                  @blur="validateField('subject')"
                />
                <p v-if="errors.subject" class="mt-1.5 text-xs text-red-400">
                  {{ errors.subject }}
                </p>
              </div>

              <div class="mb-5 flex flex-col">
                <label
                  for="message"
                  class="text-white block mb-2 text-base font-semibold"
                  >Message</label
                >
                <textarea
                  v-model.trim="form.message"
                  id="message"
                  maxlength="1000"
                  rows="5"
                  class="bg-[#1e1e1e] border text-gray-100 text-base rounded-lg block w-full p-3 resize-none placeholder-[#9CA2A9] focus:outline-none transition-colors"
                  :class="
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#2b2b2b] focus:border-primary'
                  "
                  placeholder="Write your message..."
                  name="message"
                  @blur="validateField('message')"
                ></textarea>
                <div class="flex items-center justify-between mt-1.5">
                  <p v-if="errors.message" class="text-xs text-red-400">
                    {{ errors.message }}
                  </p>
                  <p class="text-xs text-gray-500 ml-auto">
                    {{ form.message.length }}/1000
                  </p>
                </div>
              </div>

              <!-- Status banner -->
              <transition name="fade">
                <div
                  v-if="statusMessage"
                  class="mb-5 text-sm rounded-lg px-4 py-3 border"
                  :class="
                    statusType === 'success'
                      ? 'border-green-600/40 bg-green-900/20 text-green-300'
                      : 'border-red-600/40 bg-red-900/20 text-red-300'
                  "
                  role="alert"
                >
                  {{ statusMessage }}
                </div>
              </transition>

              <div class="mt-auto grid grid-cols-2 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  @click="resetForm"
                  class="px-4 py-2 flex justify-center items-center gap-x-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                >
                  <Trash :size="16" />
                  Discard
                </button>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="px-4 py-2 flex justify-center items-center gap-x-2 rounded-full text-black font-semibold bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  <Send :size="16" />
                  {{ isSubmitting ? "Opening..." : "Send" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Mail, Linkedin, Github, Trash, Send, FileText } from "lucide-vue-next";
import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  GITHUB_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
} from "../utils/data/contactDetails";

const resumeUrl = new URL("@/assets/resume.pdf", import.meta.url).href;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = reactive({
  email: "",
  subject: "",
  message: "",
});

const errors = reactive({
  email: "",
  subject: "",
  message: "",
});

const statusMessage = ref("");
const statusType = ref("success");
const isSubmitting = ref(false);
let statusTimer = null;

function validateField(field) {
  switch (field) {
    case "email":
      if (!form.email) {
        errors.email = "Email is required.";
      } else if (!EMAIL_REGEX.test(form.email)) {
        errors.email = "Please enter a valid email address.";
      } else {
        errors.email = "";
      }
      break;
    case "subject":
      if (!form.subject) {
        errors.subject = "Subject is required.";
      } else if (form.subject.length < 3) {
        errors.subject = "Subject must be at least 3 characters.";
      } else {
        errors.subject = "";
      }
      break;
    case "message":
      if (!form.message) {
        errors.message = "Message is required.";
      } else if (form.message.length < 10) {
        errors.message = "Message must be at least 10 characters.";
      } else {
        errors.message = "";
      }
      break;
  }
  return !errors[field];
}

function validateAll() {
  const emailOk = validateField("email");
  const subjectOk = validateField("subject");
  const messageOk = validateField("message");
  return emailOk && subjectOk && messageOk;
}

function showStatus(message, type = "success", duration = 5000) {
  statusMessage.value = message;
  statusType.value = type;
  if (statusTimer) clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    statusMessage.value = "";
  }, duration);
}

function handleSubmit(event) {
  event.preventDefault();

  if (!validateAll()) {
    showStatus("Please fix the highlighted fields before sending.", "error");
    return;
  }

  isSubmitting.value = true;

  try {
    const subjectEncoded = encodeURIComponent(form.subject);
    const bodyEncoded = encodeURIComponent(
      "From: " + form.email + "\n\n" + form.message,
    );
    const mailtoLink =
      "mailto:" +
      EMAIL_ADDRESS +
      "?subject=" +
      subjectEncoded +
      "&body=" +
      bodyEncoded;

    // Guard against environments where mailto: links silently fail
    // (e.g. no mail client configured) by wrapping in try/catch.
    window.location.href = mailtoLink;

    showStatus(
      "Your email client should now be open with the message pre-filled. If nothing happened, please email krngrover6@gmail.com directly.",
      "success",
      8000,
    );
  } catch (err) {
    showStatus(
      "Something went wrong opening your email client. Please email krngrover6@gmail.com directly.",
      "error",
      8000,
    );
  } finally {
    isSubmitting.value = false;
  }
}

function resetForm() {
  form.email = "";
  form.subject = "";
  form.message = "";
  errors.email = "";
  errors.subject = "";
  errors.message = "";
  statusMessage.value = "";
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
