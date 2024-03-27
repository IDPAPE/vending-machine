import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  money = 0.00

  snacks = [
    new Snack({
      name: `Doritos`,
      price: 3.50,
      imgUrl: `https://imgs.search.brave.com/LlaFlfRQLzxWyuf3qerbJb18nWkUVo_FGVS4Vt5nxbM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFIblBCOTBRakwu/anBn`
    }),
    new Snack({
      name: `Cheetos`,
      price: 3.50,
      imgUrl: `https://imgs.search.brave.com/bHLaVWizG2dvRthCCUsJvzAThGRMgXgMCkfKNmEpeaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFuajhWbVNSbEwu/anBn`
    }),
    new Snack({
      name: `FunYuns`,
      price: 3.50,
      imgUrl: `https://imgs.search.brave.com/o9tf2p8VC5KP03MnmcHtVuz3bPbHNhY_6dweSiC5Wko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFHUjBwNVFqQUwu/anBn`
    }),
    new Snack({
      name: `Diet Coca Cola`,
      price: 1.00,
      imgUrl: `https://imgs.search.brave.com/OAkdauEbRNpUxaJs7Wzu0dyOlskwkIByhF139shpWOc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF3WXY5dWEycUwu/anBn`
    }),
    new Snack({
      name: `Dr. Pepper`,
      price: 1.00,
      imgUrl: `https://imgs.search.brave.com/aZd_Bb8TSsFZAqHQ_qsmXEfg8n7hCAlK9lQry17vmNk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hcnRp/c3RpY3Bpenphbnku/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL2Rv/d25sb2FkXzEuanBn/P3Y9MTYwMzk4Mzk4/MA`
    }),
    new Snack({
      name: `Mtn. Dew`,
      price: 1.00,
      imgUrl: `https://imgs.search.brave.com/nF9_SuSS4PEv8r7cMCKi0wje4PhLYBmJruCTYz8uq3A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzMxR2UtUlNJcnNM/LmpwZw`
    }),
    new Snack({
      name: `Gatorade`,
      price: 1.50,
      imgUrl: `https://imgs.search.brave.com/FPVsEkdvBTOHwkOjpWnUnzkyea8DIxvnFavf8Wt7OME/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvZTA5/ODEzYWMtYTFlNS00/MDkwLTk5ZTEtZTc5/NzU2MTJlNjUyLjkz/YjAzMGU1ZGJmN2Zj/NWY5NDg2ZDhlMmUz/ZjM4NWYxLmpwZWc_/b2RuSGVpZ2h0PTc4/NCZvZG5XaWR0aD01/ODAmb2RuQmc9RkZG/RkZG`
    }),
    new Snack({
      name: `Monster`,
      price: 3.00,
      imgUrl: `https://imgs.search.brave.com/PESAXT1Wbm8DthFp5TnaYPvuI2dY-ZKAwBo9xPCPjxY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFidW5zTkNURUwu/anBn`
    }),
    new Snack({
      name: `Antimatter`,
      price: 999999999999999999999999999999999999,
      imgUrl: `https://imgs.search.brave.com/_I2EW71Gb418MshTJGrqWIfW1ddXVSdal-wiO_qahSE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY1/NDczOTI0L3Bob3Rv/L2hpZ2dzLWJvc29u/LWluLWxhcmdlLWhh/ZHJvbi1jb2xsaWRl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cnNuRVAyYzVs/ekc5RXNlX0tzYmFy/a1ZLeEVjcVZIeU9j/OEh5WWtfbFpfYz0`
    })
  ]


  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())