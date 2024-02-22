import { createPinia, setActivePinia } from "pinia";
import { expect } from "vitest";
import type { Mock } from "vitest";

import type { Role } from "~/composables/api/role/types/role.class";
import { useRolesStore } from "~/stores/role/useRolesStore";
import * as UseFetchRolesComposable from "~/composables/api/role/useFetchRoles";
import { createFakeRole } from "~/tests/unit/utils/factories/composables/api/role/role.factory";

describe("Roles Store", () => {
  let mocks: {
    composables: {
      useFetchRoles: {
        fetchRoles: Mock;
      }
    }
  };

  beforeEach(() => {
    mocks = { composables: { useFetchRoles: { fetchRoles: vi.fn() } } };
    vi.spyOn(UseFetchRolesComposable, "useFetchRoles").mockImplementation(() => mocks.composables.useFetchRoles);
    setActivePinia(createPinia());
  });

  it("should have initial state when created.", () => {
    const rolesStore = useRolesStore();

    expect(rolesStore.roles).toBeNull();
    expect(rolesStore.fetchingRoleStatus).toBe("idle");
  });

  describe("fetchAndSetRoles", () => {
    it("should fetch roles when called.", async() => {
      const rolesStore = useRolesStore();
      await rolesStore.fetchAndSetRoles();

      expect(mocks.composables.useFetchRoles.fetchRoles).toHaveBeenCalledExactlyOnceWith();
    });

    it("should set roles when called.", async() => {
      const roles = [
        createFakeRole(),
        createFakeRole(),
        createFakeRole(),
      ];
      mocks.composables.useFetchRoles.fetchRoles.mockResolvedValue(roles);
      const rolesStore = useRolesStore();
      await rolesStore.fetchAndSetRoles();

      expect(rolesStore.roles).toStrictEqual<Role[]>(roles);
    });
  });
});