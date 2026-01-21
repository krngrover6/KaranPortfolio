<template>
  <section class="text-white mt-20" id="contact">
    <h2
      class="text-3xl sm:text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16"
    >
      📬 Let's
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >Connect</span
      >
    </h2>
    <div
      class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8"
      data-aos="zoom-in-up"
    >
      <!-- Contact Info Section -->
      <div>
        <p class="text-[#adb7be]">
          I would love to hear from you! Whether you have a question about a
          project, collaboration, or just want to say hi, feel free to reach
          out.
        </p>
        <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
          <!-- Email -->
          <div class="flex mb-10 items-center">
            <div
              class="p-2"
              style="
                background: #2a2a2a;
                width: 50px;
                height: 46px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid#111a3e;
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
              "
            >
              <img
                src="https://img.icons8.com/metro/50/ffffff/new-post.png"
                alt="new-post"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>Email</h4>
              <a href="mailto:krngrover6@gmail.com">krngrover6@gmail.com</a>
            </div>
          </div>
          <!-- Phone -->
          <!-- <div class="flex mb-10 items-center">
            <div
              class="p-2"
              style="
                background: #2a2a2a;
                width: 50px;
                height: 46px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid#111a3e;
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
              "
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="phone"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>Phone</h4>
              <p>+49 17687739648</p>
            </div>
          </div> -->
          <!-- LinkedIn -->
          <div class="flex mb-10 items-center">
            <div
              class="p-2"
              style="
                background: #2a2a2a;
                width: 50px;
                height: 46px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid#111a3e;
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
              "
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="linkedin"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>LinkedIn</h4>
              <p>
                <a
                  href="https://www.linkedin.com/in/karan-grover-2120381b1/"
                  target="_blank"
                  class="hover:underline"
                >
                  https://www.linkedin.com/in/karan-grover-2120381b1/
                </a>
              </p>
            </div>
          </div>

          <!-- github -->
          <div class="flex mb-10 items-center">
            <div
              class="p-2"
              style="
                background: #2a2a2a;
                width: 50px;
                height: 46px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid#111a3e;
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
              "
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="linkedin"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>Github</h4>
              <p>
                <a
                  href="https://github.com/krngrover6"
                  target="_blank"
                  rel="noreferrer nofollow noindex"
                  class="hover:underline"
                >
                  https://github.com/krngrover6
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact Form Section -->
      <div
        style="
          background: #1e1e1e;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #1e1e1e;
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
        "
      >
        <form
          class="flex flex-col p-6"
          data-aos="zoom-in-up"
          action="mailto:krngrover6@gmail.com"
          method="get"
          enctype="text/plain"
        >
          <div class="mb-6">
            <label
              for="email"
              class="text-white block mb-2 text-base font-semibold"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="bg-[#2a2a2a] placeholder-[#9CA2A9] text-gray-100 text-base rounded-lg block w-full p-2.5"
              placeholder="email@gmail.com"
              name="email"
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="text-white block mb-2 text-base font-semibold"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="bg-[#2a2a2a] placeholder-[#9CA2A9] text-gray-100 text-base rounded-lg block w-full p-2.5"
              placeholder="Your subject here"
              name="subject"
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="text-white block mb-2 text-base font-semibold"
              >Message</label
            >
            <textarea
              id="message"
              class="bg-[#2a2a2a] placeholder-[#9CA2A9] text-gray-100 text-base rounded-lg block w-full p-2.5 resize-none"
              placeholder="Write your message..."
              name="message"
              rows="4"
            ></textarea>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button
              type="reset"
              class="z-1 px-4 py-2 rounded-full border border-primary text-primary hover:bg-opacity-90"
            >
              Discard Message
            </button>
            <button
              type="submit"
              class="z-1 px-4 py-2 rounded-full text-black bg-primary hover:bg-opacity-90 border-2 border-transparent"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <!-- Decorative Gradient -->
      <div
        class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>
