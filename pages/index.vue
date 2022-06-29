<template>
  <NuxtLayout>
    <Head>
      <Title
        >Ne manquez plus une occasion de faire plaisir ! -
        {{ SITE_NAME }}</Title
      >
      <Meta name="description" content="qsdqsd" />
    </Head>
    <div class="bg-white">
      <div id="start" class="relative overflow-hidden">
        <main>
          <div
            class="
              pt-10
              bg-gray-50
              sm:pt-16
              lg:pt-8 lg:pb-14 lg:overflow-hidden
            "
          >
            <div class="mx-auto max-w-5xl lg:px-8">
              <div class="lg:grid grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <div
                  class="
                    mx-auto
                    max-w-md
                    px-4
                    sm:max-w-2xl sm:px-6 sm:text-center
                    lg:px-0 lg:text-left lg:flex lg:items-center lg:col-span-2
                  "
                >
                  <div class="lg:py-24">
                    <h1
                      class="
                        mt-4
                        text-4xl
                        tracking-tight
                        font-extrabold
                        sm:mt-5 sm:text-6xl
                        lg:mt-6
                        xl:text-6xl
                        mb-10
                      "
                    >
                      <span class="">Dénichez des produits tendances aux </span>
                      <span
                        class="
                          pb-3
                          bg-clip-text
                          text-transparent
                          bg-gradient-to-r
                          from-indigo-400
                          to-indigo-700
                          sm:pb-5
                        "
                        >meilleurs Deals !</span
                      >
                    </h1>
                    <p
                      class="
                        text-base text-gray-800
                        sm:text-xl
                        lg:text-lg
                        xl:text-xl
                        mb-10
                      "
                    >
                      Ne manquez plus d'occasion de faire plaisir et de faire de
                      bon affaires !
                    </p>
                    <div class="mt-10 sm:mt-12">
                      <form @submit.prevent="onSubmit" class="sm:flex">
                        <label for="email-address" class="sr-only">
                          Entrez votre e-mail principal
                        </label>
                        <input
                          v-model="email"
                          id="email-address"
                          name="email-address"
                          type="email"
                          autocomplete="email"
                          required=""
                          class="
                            w-full
                            px-5
                            py-3
                            border border-transparent
                            placeholder-gray-500
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-offset-gray-800
                            focus:ring-white
                            focus:border-white
                            rounded-md
                          "
                          placeholder="Entrez votre e-mail principal"
                        />
                        <div
                          class="
                            mt-3
                            rounded-md
                            shadow
                            sm:mt-0 sm:ml-3 sm:flex-shrink-0
                          "
                        >
                          <button
                            type="submit"
                            class="
                              w-full
                              flex
                              items-center
                              justify-center
                              px-5
                              py-3
                              border border-transparent
                              text-base
                              font-medium
                              rounded-md
                              text-white
                              bg-indigo-500
                              hover:bg-indigo-600
                              focus:outline-none
                              focus:ring-2
                              focus:ring-offset-2
                              focus:ring-offset-gray-800
                              focus:ring-indigo-500
                            "
                          >
                            Télécharger l'app
                          </button>
                        </div>
                      </form>
                      <p class="mt-3 text-xs text-gray-500 italic mx-5">
                        100 % : en plus de recevoir l'application par e-mail,
                        vous allez avoir l'opportunité de recevoir des promos
                        uniques, directement dans votre boite mail. Vous pouvez
                        bien sur vous désabonner à tout moment.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div
                    class="
                      mx-auto
                      max-w-md
                      px-4
                      sm:max-w-2xl sm:px-6
                      lg:max-w-none lg:px-0
                    "
                  >
                    <img
                      class="
                        w-full
                        lg:absolute
                        lg:inset-y-0
                        lg:left-0
                        lg:h-full
                        lg:w-auto
                        lg:max-w-none
                      "
                      src="/home.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div class="bg-indigo-700">
        <div
          class="
            max-w-2xl
            mx-auto
            text-center
            py-16
            px-4
            sm:py-20 sm:px-6
            lg:px-8
          "
        >
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">Pourquoi faut-il s'inscrire ?</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-indigo-200">
            Nous limittons l'accès de notre application pour proposer un service
            de qualité "Topissime" et vous proposer les meilleurs produits aux
            meilleurs prix.
          </p>
          <NuxtLink
            v-scroll-to="'#start'"
            :to="{ name: 'index', hash: '#start' }"
            class="
              mt-8
              w-full
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-indigo-600
              bg-white
              hover:bg-indigo-50
              sm:w-auto
            "
          >
            Télécharger l'app
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/vue/outline/index.js";
import {
  ChevronRightIcon,
  ExternalLinkIcon,
} from "@heroicons/vue/solid/index.js";

const { SITE_NAME } = useRuntimeConfig();
const { $tracker } = useNuxtApp();

const { email, onSubmit } = useOptin();

onMounted(() => {
  $tracker.contentView();
});
</script>