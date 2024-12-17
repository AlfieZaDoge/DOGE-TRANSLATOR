class BinaryEncoder {
    static textToBinary(text) {
        return text
            .split("")
            .map((char) => {
                const binary = char.charCodeAt(0).toString(2);
                return binary.padStart(8, "0");
            })
            .join(" ");
    }
}

export default BinaryEncoder;
