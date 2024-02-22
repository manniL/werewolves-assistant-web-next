import { Expose } from "class-transformer";

import { RoleSides } from "~/composables/api/role/enums/role.enums";

class CreateGamePlayerSideDto {
  @Expose()
  public original?: RoleSides;

  @Expose()
  public current?: RoleSides;
}

export { CreateGamePlayerSideDto };