<template>
  <NuxtLayout>
    <section class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="
              text-base
              font-semibold
              text-indigo-600
              tracking-wide
              uppercase
            "
          >
            Félicitations !
          </h2>
          <p
            class="
              mt-1
              text-4xl
              font-extrabold
              text-gray-900
              sm:text-5xl sm:tracking-tight
              lg:text-6xl
            "
          >
            Bienvenue 👋
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            En prise en compte. Tu vas recevoir un e-mail avec le lien de
            téléchargement de l'application. (Ça peut prendre 15 minutes)
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Si tu n'as pas reçu d'e-mail, tu peux vérifier dans les spams.
          </p>
          <p class="max-w-xl mt-10 mx-auto text-xl text-gray-500">
            Tu peux aussi télécharger l'application directement en cliquant sur
            le lien juste en dessous.
          </p>
          <div class="grid md:grid-cols-10">
            <div class="md:col-span-2 md:col-start-5">
              <NuxtLink :to="GOOGLE_PLAY_URL" target="_blank">
                <img
                  src="/images/google-play-badge.png"
                  alt="Google Play et le logo Google Play sont des marques de Google LLC."
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const { GOOGLE_PLAY_URL } = useRuntimeConfig();
</script>