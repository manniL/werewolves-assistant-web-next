import type { mount } from "@vue/test-utils";
import { expect } from "vitest";

import type { NuxtLink } from "#components";
import type RoleImage from "~/components/shared/role/RoleImage/RoleImage.vue";
import { RoleNames } from "~/composables/api/role/enums/role.enums";
import About from "~/pages/about.vue";
import { mountSuspendedComponent } from "~/tests/unit/utils/helpers/mount.helpers";

describe("About Page Component", () => {
  let wrapper: ReturnType<typeof mount<typeof About>>;

  beforeEach(async() => {
    wrapper = await mountSuspendedComponent(About);
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Title", () => {
    it("should display role image of werewolf when rendered.", () => {
      const roleImage = wrapper.findComponent<typeof RoleImage>("#about-role-image-title");

      expect(roleImage.props("roleName")).toBe(RoleNames.WEREWOLF);
    });

    it("should display translated title when rendered.", () => {
      const title = wrapper.find<HTMLHeadElement>("#about-title");

      expect(title.text()).toBe("Why an assistant ?");
    });
  });

  describe("Footer", () => {
    it("should have 'to' prop set to home for back to home button when rendered.", () => {
      const backToHomeButton = wrapper.findComponent<typeof NuxtLink>("#about-back-to-home-button");

      expect(backToHomeButton.props("to")).toBe("/");
    });

    it("should translate back to home button when rendered.", async() => {
      wrapper = await mountSuspendedComponent(About, {
        shallow: false,
        global: {
          stubs: {
            AboutWerewolvesGame: true,
            AboutWerewolvesAssistant: true,
            AboutAvailableRoles: true,
            AboutHowToContribute: true,
            AboutCreator: true,
          },
        },
      });

      const backToHomeButton = wrapper.findComponent<typeof NuxtLink>("#about-back-to-home-button");

      expect(backToHomeButton.text()).toBe("Back to home");
    });
  });
});