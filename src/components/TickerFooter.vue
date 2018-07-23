<template>
  <v-footer app dark height='auto'>
    <v-flex>
        <v-card flat tile class="text-xs-center">
            <v-card-text class="white--text">
                &copy;2018 — <strong><a href='http://gerardlucas.com'>Gerard Lucas</a></strong>
            </v-card-text>
        </v-card>
    </v-flex>
    </v-footer>
</template>

<script>
export default {
  name: 'TickerFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        text-decoration: none;
    }
</style>

