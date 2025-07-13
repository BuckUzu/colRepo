function emulatorJS(core, gameName, gameURL) {
    EJS_player = "#game";
    EJS_core = core;
    EJS_gameName = gameName;
    EJS_color = "#005eacff";
    EJS_startOnLoaded = true;
    EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    EJS_gameUrl = gameURL;
    EJS_Buttons = {
        playPause: { visible: true },
        restart: { visible: false },
        mute: { visible: false },
        unmute: { visible: false },
        settings: { visible: false },
        fullscreen: { visible: false },
        saveState: { visible: false },
        loadState: { visible: false },
        screenRecord: { visible: false },
        gamepad: { visible: true },
        cheat: { visible: false },
        volume: { visible: false },
        saveSavFiles: { visible: false },
        loadSavFiles: { visible: false },
        quickSave: { visible: false },
        quickLoad: { visible: false },
        screenshot: { visible: false },
        cacheManager: { visible: false },
        exitEmulation: { visible: false },
        menubar: { visible: false}
    }; 

    //Keep this so controls can be modified
    defaultControls();
}

function keybindJS(player, button, kyboard, controller) {
    EJS_defaultControls[player][button] = {
        'value': kyboard,
        'value2': controller
    }
}

//why is button_1 and button_3 not ordered?
function defaultControls() {
    EJS_defaultControls = {
        0: { 
            0: { 'value': 'x', 'value2': 'BUTTON_2' },
            1: { 'value': 's', 'value2': 'BUTTON_4' },
            2: { 'value': 'v', 'value2': 'SELECT' },
            3: { 'value': 'enter', 'value2': 'START' },
            4: { 'value': 'up arrow', 'value2': 'DPAD_UP' },
            5: { 'value': 'down arrow', 'value2': 'DPAD_DOWN' },
            6: { 'value': 'left arrow', 'value2': 'DPAD_LEFT' },
            7: { 'value': 'right arrow', 'value2': 'DPAD_RIGHT' },
            8: { 'value': 'z', 'value2': 'BUTTON_1' },
            9: { 'value': 'a', 'value2': 'BUTTON_3' },
            10: { 'value': 'q', 'value2': 'LEFT_TOP_SHOULDER' },
            11: { 'value': 'e', 'value2': 'RIGHT_TOP_SHOULDER' },
            12: { 'value': 'tab', 'value2': 'LEFT_BOTTOM_SHOULDER' },
            13: { 'value': 'r', 'value2': 'RIGHT_BOTTOM_SHOULDER' },
            14: { 'value': '', 'value2': 'LEFT_STICK', },
            15: { 'value': '', 'value2': 'RIGHT_STICK', },
            16: { 'value': 'h', 'value2': 'LEFT_STICK_X:+1' },
            17: { 'value': 'f', 'value2': 'LEFT_STICK_X:-1' },
            18: { 'value': 'g', 'value2': 'LEFT_STICK_Y:+1' },
            19: { 'value': 't', 'value2': 'LEFT_STICK_Y:-1' },
            20: { 'value': 'l', 'value2': 'RIGHT_STICK_X:+1' },
            21: { 'value': 'j', 'value2': 'RIGHT_STICK_X:-1' },
            22: { 'value': 'k', 'value2': 'RIGHT_STICK_Y:+1' },
            23: { 'value': 'i', 'value2': 'RIGHT_STICK_Y:-1' },
            24: { 'value': '1' },
            25: { 'value': '2' },
            26: { 'value': '3' },
            27: { 'value': 'add' }, 
            28: { 'value': 'space' },
            29: { 'value': 'subtract' },
        },
        1: {},
        2: {},
        3: {}
    };
}