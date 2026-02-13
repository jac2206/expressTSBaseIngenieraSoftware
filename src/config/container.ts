import {
  createContainer,
  asClass,
  InjectionMode
} from "awilix";

import { HealthService } from "../service/health.service";
import { HealthController } from "../controller/health.controller";
import { GenericController } from "../controller/v1/generic.controller";

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  // Service
  healthService: asClass(HealthService).singleton(),

  // Controller
  healthController: asClass(HealthController).scoped(),
  genericController: asClass(GenericController).scoped()
});
