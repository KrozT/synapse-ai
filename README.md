<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align="center" markdown="1">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="https://i.imgur.com/bErDYZx.png" alt="Logo" width="180" height="180">
  </a>

<h3 align="center">Synapse AI</h3>

<div align="center">

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f6ced0797172407f90e4b10b0b744c65)](https://app.codacy.com/gh/KrozT/synapse-ai/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

</div>

  <p align="center">
An alternative OpenAI client inspired by virtual assistants, offering intelligent responses and assistance.    <br />
<a href="https://github.com/KrozT/synapse-ai"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://synapse.krozt.dev/">View Demo</a>
    ·
    <a href="https://github.com/KrozT/synapse-ai/issues">Report Bug</a>
    ·
    <a href="https://github.com/KrozT/synapse-ai/pulls">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#packages">Packages</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#internationalization">Internationalization</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Synapse is a versatile and innovative AI-powered application that serves as an alternative client, drawing inspiration from virtual assistants. It leverages the cutting-edge imaging and natural language processing technologies developed by OpenAI to provide users with a comprehensive and effective solution.

Driven by the power of artificial intelligence, Synapse offers intelligent responses and personalized assistance to users in a wide range of tasks. With its integration of OpenAI's imaging technology, Synapse is capable of analyzing and interpreting images, enabling users to gain valuable insights and information.

In addition to its imaging capabilities, Synapse also incorporates OpenAI's Whisper technology for natural language processing. This integration allows Synapse to understand and respond to user queries with remarkable accuracy and efficiency, creating a more natural and conversational experience.

Synapse aims to redefine the way users interact with AI applications by providing a seamless and intuitive interface. Its user-friendly design and intelligent features make it an indispensable tool for anyone seeking intelligent and efficient assistance.

Please note that Synapse is an independent project developed by a community of dedicated developers, and it is not directly affiliated with OpenAI.

### Screenshots
<details>

<summary>Images</summary>

Work in progress, no image for now.

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![TypeScript][TypeScript-shield]][TypeScript-url]
* [![Vue.js][Vue.js]][Vue-url]
* [![Rust][Rust-shield]][Rust-url]
* [![Tauri][Tauri-shield]][Tauri-url]
* [![TailwindCSS][TailwindCSS-shield]][TailwindCSS-url]

### Packages
- [@heroicons/vue](https://github.com/tailwindlabs/heroicons)
- [@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools)
- [@tauri-apps/api](https://github.com/tauri-apps/tauri)
- [axios](https://github.com/axios/axios)
- [daysiui](https://github.com/saadeghi/daisyui)
- [firebase](https://github.com/firebase/firebase-js-sdk)
- [pinia](https://github.com/vuejs/pinia)
- [theme-change](https://github.com/saadeghi/theme-change)
- [vue](https://github.com/vuejs/core)
- [vue-i18n](https://github.com/intlify/vue-i18n-next)
- [vue-router](https://github.com/vuejs/router)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Get a necessary API Keys
   - [OpenAI](https://platform.openai.com/account/api-keys)
   - [Firebase](https://console.firebase.google.com/)
     <br>

2. Clone the repo
   ```sh
   git clone https://github.com/KrozT/synapse-ai.git
   ```
3. Install packages
   ```sh
   pnpm install
   ```
4. Add OpenAI API Key to your environment variables
   ```dotenv
   # OpenAI API Key
   SYNAPSE_OPENAI_API_KEY=<YOUR API KEY>
   ```
5. Define the application name on the environment variables (Optional)
   ```dotenv
   # Application Name
   SYNAPSE_APP_NAME=<YOUR APP NAME>
   ```
6. Add Firebase configuration to your environment variables (Recommended)
   ```dotenv
   # Firebase Config
   SYNAPSE_FIREBASE_API_KEY=<YOUR API KEY>
   SYNAPSE_FIREBASE_AUTH_DOMAIN=<YOUR AUTH DOMAIN>
   SYNAPSE_FIREBASE_PROJECT_ID=<YOUR PROJECT ID>
   SYNAPSE_FIREBASE_STORAGE_BUCKET=<YOUR STORAGE BUCKET>
   SYNAPSE_FIREBASE_MESSAGING_SENDER_ID=<YOUR MESSAGING SENDER ID>
   SYNAPSE_FIREBASE_APP_ID=<YOUR APP ID>
   SYNAPSE_FIREBASE_MEASUREMENT_ID=<YOUR MEASUREMENT ID>
   ```
   Firebase configuration is stored on environment variables for easy and fast deployment without having to change the code.
   If you don't want to use environment variables, you can change the configuration on the `src/composables/database.ts` file.

7. Build project
   ```sh
   pnpm run build
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Once you have the project built and running on your preferred hosting service or locally,
just go to the address where you have it hosted or your localhost and you will be able to use it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Internationalization

You can add new languages to the project by following these steps:

1. Create a new file in the `src/locales` folder with the name of the language you want to add following the IS0 631-1 standard (e.g. `fr-FR.json`).
2. Copy the contents of the `src/locales/en-US.json` file and paste it into the file you just created.
3. Change the values of the keys to the language you want to add.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Speech Recognition
  - [ ] Web Speech API
    - [ ] Speech to text
    - [ ] Text to speech
  - [ ] OpenAI Whisper API
    - [ ] Speech to text
- [ ] Language Model Integration
  - [ ] GPT-3.5
    - [ ] Chat
  - [ ] GPT-4
- [ ] DALL-E Integration
  - [ ] Image generation
  - [ ] Image editing
- [ ] Firebase Integration
  - [ ] Database
  - [ ] Analytics
- [ ] User Authentication
  - [ ] Google
  - [ ] Email
- [x] User Interface
  - [x] Responsive
  - [x] Mobile-friendly
  - [ ] Automatic language detection (based on browser language)
  - [x] Dark mode
- [ ] Internationalization
  - [ ] English (United States)
  - [ ] Spanish (Chile)

See the [open issues](https://github.com/KrozT/synapse-ai/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Othneil Drew](https://github.com/othneildrew/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/KrozT/synapse-ai.svg?style=for-the-badge
[contributors-url]: https://github.com/KrozT/synapse-ai/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KrozT/synapse-ai.svg?style=for-the-badge
[forks-url]: https://github.com/KrozT/synapse-ai/network/members
[stars-shield]: https://img.shields.io/github/stars/KrozT/synapse-ai.svg?style=for-the-badge
[stars-url]: https://github.com/KrozT/synapse-ai/stargazers
[issues-shield]: https://img.shields.io/github/issues/KrozT/synapse-ai.svg?style=for-the-badge
[issues-url]: https://github.com/KrozT/synapse-ai/issues
[license-shield]: https://img.shields.io/github/license/KrozT/synapse-ai.svg?style=for-the-badge
[license-url]: https://github.com/KrozT/synapse-ai/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/matias-espinoza-bustos/
[product-screenshot-1]: https://i.imgur.com/KQ4BGIV.gif
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

[TypeScript-url]: https://www.typescriptlang.org
[TypeScript-shield]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white

[Firebase-url]: https://firebase.google.com/
[Firebase-shield]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white

[TailwindCSS-url]: https://github.com/tailwindlabs/tailwindcss
[TailwindCSS-shield]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white

[Rust-url]: https://www.rust-lang.org/
[Rust-shield]: https://img.shields.io/badge/Rust-black?style=for-the-badge&logo=rust&logoColor=#E57324

[Tauri-url]: https://tauri.app/
[Tauri-shield]: https://img.shields.io/badge/Tauri-000000?style=for-the-badge&logo=tauri&logoColor=white
