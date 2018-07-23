<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href='https://github.com/gerardl/VuetifyTicker' target='_blank' icon>
        <v-icon color="grey lighten-1">fab fa-github</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for='currency in this.currencies' :key='currency.channel' xs12 sm6 lg4>
              <bitstamp-channel :currency='currency.name' :symbol='currency.symbol' :channel-name='currency.channel' />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <ticker-footer />
  </v-app>
</template>

<script>
import BitstampChannel from './components/BitstampChannel'
import TickerFooter from './components/TickerFooter'

export default {
  name: 'App',
  components: {
    BitstampChannel,
    TickerFooter
  },
  data () {
    return {
      currencies: [
        { name: 'Bitcoin', channel: '', symbol: 'BTC' },
        { name: 'Ethereum', channel: 'ethusd', symbol: 'ETH' },
        { name: 'Ripple XRP', channel: 'xrpusd', symbol: 'XRP' },
        { name: 'Litecoin', channel: 'ltcusd', symbol: 'LTC' },
        { name: 'Bitcoin Cash', channel: 'bchusd', symbol: 'BCH' },
        { name: 'Euro', channel: 'eurusd', symbol: 'EUR' }
      ],
      title: 'Crypto Ticker'
    }
  }
}
</script>
