<template>
  <div>
    <v-app-bar dark class="lime--text">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="lime--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ name }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" absolute temporary>
      <v-list nav dense >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item tag="a" href="home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashbooard</v-list-item-title>
          </v-list-item>

          <v-list-group prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>Catalogos</v-list-item-title>
            </template>

            <v-list-item
              v-for="([title, icon, link], i) in cruds"
              :key="i"
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ user.complete_name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  props: ["name", "user"],
  data: () => ({
    drawer: false,
    group: null,
    cruds: [
      ["Unidades", "mdi-plus-outline", "units"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
};
</script>
