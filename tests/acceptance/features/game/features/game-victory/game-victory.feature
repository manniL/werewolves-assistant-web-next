@game-victory

Feature: 🏆 Game Victory

  Scenario: 🏆 Game is won by nobody, there are no survivors

    Given the user creates a game with the players with name and role
      | name    | role     |
      | Antoine | Hunter   |
      | Bob     | Werewolf |
      | Charlie | Cupid    |
      | David   | Witch    |
    And the user closes the toast
    Then the game's current play title should be "Survivors elect the Sheriff"

    When the survivors elect the sheriff with the votes
      | source  | target  |
      | Bob     | Antoine |
      | Charlie | Antoine |
    Then the game's current play title should be "Cupid charms"

    When the cupid charms the players
      | name    |
      | Bob     |
      | Charlie |
    Then the game's current play title should be "Lovers meet each other"

    When the lovers meet each other
    Then the game's current play title should be "Werewolves eat"

    When the werewolves eat the player with name "David"
    Then the game's current play title should be "Witch uses potions"

    When the witch uses her potions on players
      | potion | target  |
      | death  | Antoine |
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game's current play title should be "Hunter shoots"

    When the hunter shoots the player with name "Bob"
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game should be over with title "Draw ! Everyone is dead in the village…" and subtitle "Everybody murdered each other. A deadly silence reigns in the village…"
    And the game winners should have no winners
    And the link with name "Create another game" should be visible
    And the page should match the snapshot with name "Game won by nobody"

  Scenario: 🏆 Game is won by Villagers

    Given the user creates a game with the players with name and role
      | name    | role     |
      | Antoine | Hunter   |
      | Bob     | Werewolf |
      | Charlie | Idiot    |
      | David   | Angel    |
    And the user closes the toast
    Then the game's current play title should be "Survivors elect the Sheriff"

    When the survivors elect the sheriff with the votes
      | source  | target  |
      | Bob     | Antoine |
      | Charlie | Antoine |
    Then the game's current play title should be "Survivors vote"

    When the survivors vote with the votes
      | source  | target |
      | Antoine | Bob    |
      | Charlie | Bob    |
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game should be over with title "The Villagers win !" and subtitle "All of the Werewolves are dead. The village is safe at last."
    And the game winners should be the players
      | name    |
      | Antoine |
      | Charlie |
      | David   |
    And the link with name "Create another game" should be visible
    And the page should match the snapshot with name "Game won by Villagers"

  Scenario: 🏆 Game is won by Werewolves

    Given the user creates a game with the players with name and role
      | name    | role                 |
      | Antoine | White Werewolf       |
      | Bob     | Werewolf             |
      | Charlie | Villager             |
      | David   | Accursed Wolf-Father |
    And the user closes the toast
    Then the game's current play title should be "Survivors elect the Sheriff"

    When the survivors elect the sheriff with the votes
      | source  | target  |
      | Bob     | Antoine |
      | Charlie | Antoine |
    Then the game's current play title should be "Werewolves eat"

    When the werewolves eat the player with name "Charlie"
    Then the game's current play title should be "Accursed Wolf-Father infects"

    When the player or group skips his turn
    Then the game's current play title should be "White Werewolf eats"

    When the player or group skips his turn
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game should be over with title "The Werewolves win !" and subtitle "All of the Villagers are dead. The Werewolves have eaten a lot and are now full, eventually."
    And the game winners should be the players
      | name    |
      | Antoine |
      | Bob     |
      | David   |
    And the link with name "Create another game" should be visible
    And the page should match the snapshot with name "Game won by Werewolves"

  Scenario: 🏆 Game is won by Lovers

    Given the user creates a game with the players with name and role
      | name    | role     |
      | Antoine | Cupid    |
      | Bob     | Werewolf |
      | Charlie | Hunter   |
      | David   | Idiot    |
    And the user closes the toast
    Then the game's current play title should be "Survivors elect the Sheriff"

    When the survivors elect the sheriff with the votes
      | source  | target  |
      | Bob     | Antoine |
      | Charlie | Antoine |
    Then the game's current play title should be "Cupid charms"

    When the cupid charms the players
      | name    |
      | Antoine |
      | Bob     |
    Then the game's current play title should be "Lovers meet each other"

    When the lovers meet each other
    Then the game's current play title should be "Werewolves eat"

    When the werewolves eat the player with name "Charlie"
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game's current play title should be "Hunter shoots"

    When the hunter shoots the player with name "David"
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game should be over with title "The Lovers win together !" and subtitle "The two people in love from Cupid's arrow are the only survivors. They win together and will be together forever."
    And the game winners should be the players
      | name    |
      | Antoine |
      | Bob     |
    And the link with name "Create another game" should be visible
    And the page should match the snapshot with name "Game won by Lovers"

  Scenario: 🏆 Game is won by Angel

    Given the user creates a game with the players with name and role
      | name    | role     |
      | Antoine | Villager |
      | Bob     | Werewolf |
      | Charlie | Villager |
      | David   | Angel    |
    And the user closes the toast
    Then the game's current play title should be "Survivors elect the Sheriff"

    When the survivors elect the sheriff with the votes
      | source  | target  |
      | Bob     | Antoine |
      | Charlie | Antoine |
    Then the game's current play title should be "Survivors vote"

    When the survivors vote with the votes
      | source  | target |
      | Antoine | David  |
      | Charlie | David  |
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game should be over with title "The Angel wins by himself !" and subtitle "The Angel has been eliminated during the first vote or the first night by the werewolves. He wins alone and comes back to the Good Place."
    And the game winners should be the players
      | name  |
      | David |
    And the link with name "Create another game" should be visible
    And the page should match the snapshot with name "Game won by Angel"

  Scenario: 🏆 Game is won by Pied Piper

    Given the user creates a game with the players with name and role
      | name    | role       |
      | Antoine | Pied Piper |
      | Bob     | Werewolf   |
      | Charlie | Villager   |
      | David   | Villager   |
    And the user closes the toast
    Then the game's current play title should be "Survivors elect the Sheriff"

    When the survivors elect the sheriff with the votes
      | source  | target  |
      | Bob     | Antoine |
      | Charlie | Antoine |
    Then the game's current play title should be "Werewolves eat"

    When the werewolves eat the player with name "Charlie"
    Then the game's current play title should be "Pied Piper charms"

    When the pied piper charms the players
      | name  |
      | Bob   |
      | David |
    Then the game's current play title should be "Charmed people meet each other"

    When the charmed people meet each other
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game should be over with title "The Pied Piper wins by himself !" and subtitle "The Pied Piper managed to charm all the living players. He wins alone and has control over the village."
    And the game winners should be the players
      | name    |
      | Antoine |
    And the link with name "Create another game" should be visible
    And the page should match the snapshot with name "Game won by Pied Piper"

  Scenario: 🏆 Game is won by White Werewolf

    Given the user creates a game with the players with name and role
      | name    | role           |
      | Antoine | White Werewolf |
      | Bob     | Werewolf       |
      | Charlie | Hunter         |
      | David   | Idiot          |
    And the user closes the toast
    Then the game's current play title should be "Survivors elect the Sheriff"

    When the survivors elect the sheriff with the votes
      | source  | target  |
      | Bob     | Antoine |
      | Charlie | Antoine |
    Then the game's current play title should be "Werewolves eat"

    When the werewolves eat the player with name "Charlie"
    Then the game's current play title should be "White Werewolf eats"

    When the white werewolf eats the player with name "Bob"
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game's current play title should be "Hunter shoots"

    When the hunter shoots the player with name "David"
    Then the game's current play title should be "Survivors bury dead bodies"

    When the survivors bury the dead bodies
    Then the game should be over with title "The White Werewolf wins by himself !" and subtitle "The White Werewolf is the only survivor. He wins alone and can be proud of his victory."
    And the game winners should be the players
      | name    |
      | Antoine |
    And the link with name "Create another game" should be visible
    And the page should match the snapshot with name "Game won by White Werewolf"