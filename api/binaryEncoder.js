class BinaryEncoder {
    static textToBinary(text) {
        return text
            .split("")
            .map((char) => {
                const binary = char.charCodeAt(
