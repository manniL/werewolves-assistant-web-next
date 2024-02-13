import type { mount } from "@vue/test-utils";
import type Button from "primevue/button";
import type { Mock } from "vitest";

import type { GameLobbyPlayerCardProps } from "~/components/pages/game-lobby/GameLobbyPlayersParty/GameLobbyPlayerCard/game-lobby-player-card.types";
import GameLobbyPlayerCard from "~/components/pages/game-lobby/GameLobbyPlayersParty/GameLobbyPlayerCard/GameLobbyPlayerCard.vue";
import { RoleNames } from "~/composables/api/role/enums/role.enums";
import * as UseRoleName from "~/composables/api/role/useRoleName";
import { useCreateGameDtoStore } from "~/stores/game/create-game-dto/useCreateGameDtoStore";
import { createFakeCreateGamePlayerDto } from "~/tests/unit/utils/factories/composables/api/game/dto/create-game/create-game-player/create-game-player.dto.factory";
import { pTooltipDirectiveBinder } from "~/tests/unit/utils/helpers/directive.helpers";
import { mountSuspendedComponent } from "~/tests/unit/utils/helpers/mount.helpers";

describe("Game Lobby Player Card Component", () => {
  let wrapper: ReturnType<typeof mount<typeof GameLobbyPlayerCard>>;
  const defaultProps: GameLobbyPlayerCardProps = {
    player: createFakeCreateGamePlayerDto({
      name: "Toto",
      role: { name: RoleNames.WEREWOLF },
    }),
  };
  let mocks: {
    composables: {
      useRoleName: {
        getRoleNameLabel: Mock;
      }
    }
  };

  beforeEach(async() => {
    mocks = { composables: { useRoleName: { getRoleNameLabel: vi.fn() } } };
    vi.spyOn(UseRoleName, "useRoleName").mockImplementation(() => mocks.composables.useRoleName);
    wrapper = await mountSuspendedComponent(GameLobbyPlayerCard, { props: defaultProps });
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Delete button", () => {
    it("should have translated tooltip with player name when rendered.", async() => {
      const tooltip = { value: undefined };
      const directives = { ...pTooltipDirectiveBinder(tooltip, "[aria-label='Remove player Toto']") };
      wrapper = await mountSuspendedComponent(GameLobbyPlayerCard, { props: defaultProps, global: { directives } });

      expect(tooltip.value).toBe("Remove player Toto");
    });

    it("should remove player from party when clicked.", async() => {
      const createGameDtoStore = useCreateGameDtoStore();
      const deleteButton = wrapper.findComponent<Button>("[aria-label='Remove player Toto']");
      await deleteButton.trigger("click");

      expect(createGameDtoStore.removePlayerFromCreateGameDto).toHaveBeenCalledExactlyOnceWith(defaultProps.player.name);
    });
  });

  describe("Role", () => {
    it("should translate role not selected when player doesn't have role yet.", async() => {
      wrapper = await mountSuspendedComponent(GameLobbyPlayerCard, { props: { player: createFakeCreateGamePlayerDto({ name: "Toto" }) } });
      const role = wrapper.find<HTMLSpanElement>(".player-card-role");

      expect(role.text()).toBe("components.GameLobbyPlayerCard.roleNotSelected");
    });

    it("should translate role when player has role.", async() => {
      mocks.composables.useRoleName.getRoleNameLabel.mockReturnValue("Translated Role");
      wrapper = await mountSuspendedComponent(GameLobbyPlayerCard, { props: defaultProps });
      const role = wrapper.find<HTMLSpanElement>(".player-card-role");

      expect(role.text()).toBe("Translated Role");
    });
  });
});