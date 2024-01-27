import type { mount } from "@vue/test-utils";

import App from "@/app.vue";
import { useRolesStore } from "~/stores/role/useRolesStore";
import { mountSuspendedComponent } from "~/tests/unit/utils/mount.utils";

describe("App Component", () => {
  let wrapper: ReturnType<typeof mount<typeof App>>;

  beforeEach(async() => {
    wrapper = await mountSuspendedComponent(App);
  });

  it("should render component and match snapshot when mounted.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component without shallow and match snapshot when mounted.", async() => {
    wrapper = await mountSuspendedComponent(App, { shallow: false });

    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should fetch and set roles from store when mounted.", () => {
    const rolesStore = useRolesStore();
    expect(rolesStore.fetchAndSetRoles).toHaveBeenCalledWith();
  });
});