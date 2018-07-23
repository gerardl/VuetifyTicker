<template>
  <div>
    <v-card color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
            <div class="headline">{{this.currency}}</div>
        </v-card-title>
        <v-card-actions class="pa-3 sub-header">
            {{this.symbol}}
            <v-spacer></v-spacer>
            <span class="font-weight-bold">
                {{this.lastTrade.price ? '$' + this.lastTrade.price : 'waiting for trade'}}
            </span>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BitstampChannel',
  props: {
    currency: String,
    channelName: String,
    symbol: String
  },
  data() {
    return {
        prefix: 'live_trades',
        channel: null,
        lastTrade: {}
    }
  },
  created() {
      // bitstamp has a special parent btc/usd channel that 
      // doesn't follow their standard naming convention
      let bitChannel = this.channelName.length > 0 ? `${this.prefix}_${this.channelName}` : this.prefix;

      this.channel = this.$store.state.pusher.subscribe(bitChannel);
      this.channel.bind('trade', trade => this.lastTrade = trade);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>