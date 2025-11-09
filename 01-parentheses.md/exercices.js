function isBalanced(str) {
    const stack = new Stack();
    const paire = { "(": ")", "[": "]", "{": "}" };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (paire[char]) { 
            stack.push(char);
        } else if (Object.values(paire).includes(char)) {
            const dernier = stack.pop();
            if (paire[dernier] !== char) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}
