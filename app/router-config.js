import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SnacksController } from "./controllers/SnacksController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [SnacksController],
    view: `app/views/SnacksView.html`
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: `#/snacks`,
    controllers: [SnacksController],
    view: `app/views/SnacksView.html`
  }
])