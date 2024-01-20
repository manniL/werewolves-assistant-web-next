import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type { NuxtImg } from "#components";
import type { RoleImageProps } from "~/components/shared/role/RoleImage/role-image.types";
import RoleImage from "~/components/shared/role/RoleImage/RoleImage.vue";
import { RoleNames } from "~/composables/api/role/enums/role.enums";
import { mountSuspendedComponent } from "~/tests/unit/utils/mount.utils";
import * as UseRoleName from "~/composables/api/role/useRoleName";

describe("Role Image Component", () => {
  let wrapper: ReturnType<typeof mount<typeof RoleImage>>;
  const defaultProps: RoleImageProps = { roleName: RoleNames.WEREWOLF };

  async function mountRoleImageComponent(options: ComponentMountingOptions<typeof RoleImage> = {}): Promise<ReturnType<typeof mount<typeof RoleImage>>> {
    return mountSuspendedComponent(RoleImage, {
      props: {
        ...defaultProps,
        ...options,
      },
    });
  }

  beforeEach(async() => {
    vi.spyOn(UseRoleName, "useRoleName").mockReturnValue({ getRoleNameLabel: vi.fn().mockReturnValue(RoleNames.WEREWOLF) });
    wrapper = await mountRoleImageComponent();
  });

  it("should render component and match snapshot when mounted.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Image", () => {
    it("should have default size from props when mounted.", () => {
      const image = wrapper.findComponent<typeof NuxtImg>("[aria-label='werewolf']");

      expect(image.attributes("sizes")).toBe("50");
    });

    it("should have src based on role name from props when mounted.", () => {
      const image = wrapper.findComponent<typeof NuxtImg>("[aria-label='werewolf']");

      expect(image.attributes("src")).toBe("http://127.0.0.1/public/assets/images/roles/werewolf/werewolf.jpeg");
    });

    it("should have small suffix for src when definition from props is small.", async() => {
      await wrapper.setProps({ definition: "small" });
      const image = wrapper.findComponent<typeof NuxtImg>("[aria-label='werewolf']");

      expect(image.attributes("src")).toBe("http://127.0.0.1/public/assets/images/roles/werewolf/werewolf-small.jpeg");
    });
  });
});