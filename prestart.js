ccmod3.resources.jsonPatches.add("data/maps/rookie-harbor/inner-info-ug-1.json", (data) => {
    const doorEntity = data.entities.find((e) =>
        e.type === "TeleportStairs" &&
        e.settings.name === "down" &&
        e.settings.map === "rookie-harbor.inner-info-ug-2"
    );
    doorEntity.settings.map = "mod.susie-area";
    doorEntity.settings.marker = "justDoor";

    data.entities.push({
        type: "Prop",
        x: 740,
        y: 210,
        level: { level: 0, offset: 8 },
        settings: {
            name: "trainingConsole",
            mapId: 105,
            propType: { sheet: "trading-autumn", name: "signHuge" },
            propAnim: "enemy",
            condAnims: [],
            spawnCondition: "",
            interact: {
                icon: "INFO",
                hoverText: {
                    en_US: "Character Change",
                    ko_KR: "캐릭터 변경"
                },
                event: [
                    {
                        type: "ADD_MSG_PERSON",
                        person: { person: "main.lea", expression: "DEFAULT" },
                        side: "RIGHT",
                        order: 0,
                        clearSide: false
                    },
                    {
                        type: "SHOW_CHOICE",
                        person: { person: "main.lea", expression: "DEFAULT" },
                        options: [
                            {
                                "0": " ",
                                label: {
                                    en_US: "Susie",
                                    ko_KR: "수지"
                                },
                                activeCondition: "!tmp.practice || tmp.multiEnemy"
                            },
                            {
                                "0": " ",
                                label: {
                                    en_US: "Lea",
                                    ko_KR: "레아"
                                },
                                activeCondition: "!tmp.practice || !tmp.multiEnemy"
                            }
                        ],
                        "0": [{ type: "SWITCH_PLAYER_CONFIG", name: "Susie" }],
                        "1": [{ type: "SWITCH_PLAYER_CONFIG", name: "Lea" }]
                    }
                ]
            }
        }
    });
});
