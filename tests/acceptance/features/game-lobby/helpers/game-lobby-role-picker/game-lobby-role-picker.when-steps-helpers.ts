import type { RoleName } from "~/composables/api/role/types/role.types";
import type { CustomWorld } from "~/tests/acceptance/shared/types/word.types";

async function chooseRoleInLobbyRolePicker(world: CustomWorld, name: RoleName): Promise<void> {
  const role = world.page.getByRole("button", { name, exact: true });
  await role.waitFor({ state: "visible" });
  await role.click();
}

export { chooseRoleInLobbyRolePicker };