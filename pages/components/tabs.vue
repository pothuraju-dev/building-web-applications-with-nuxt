<template>
  <Tabs :tabs="categories">
    <template #panel="{ info: posts }">
      <ul>
        <li
          v-for="post in posts"
          :key="post.id"
          class="relative rounded-md p-3 hover:bg-gray-100"
        >
          <h3 class="text-sm font-medium leading-5">
            {{ post.title }}
          </h3>

          <ul
            class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
          >
            <li>{{ post.date }}</li>
            <li>&middot;</li>
            <li>{{ post.commentCount }} comments</li>
            <li>&middot;</li>
            <li>{{ post.shareCount }} shares</li>
          </ul>

          <a
            href="#"
            :class="[
              'absolute inset-0 rounded-md',
              'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
            ]"
          />
        </li>
      </ul>
    </template>
  </Tabs>
</template>
<script setup lang="ts">
const categories = ref({
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})
</script>
