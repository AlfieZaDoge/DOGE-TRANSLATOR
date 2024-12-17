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

// Converts binary back to English
class BinaryDecoder {
    static binaryToText(binaryString) {
        return binaryString
            .split(" ")
            .map((bin) => String.fromCharCode(parseInt(bin, 2)))
            .join("");
    }
}

// Converts binary to Doge-speak
class BinaryToDoge {
    static binaryToDoge(binaryString) {
        const words = binaryString.split(" ");
        const dogePhrases = ["Much", "So", "Very", "Such", "Wow"];

        return words
            .map((word, index) => {
                const phrase = dogePhrases[index % dogePhrases.length];
                return `${phrase} ${word}`;
            })
            .join(". ") + ".";
    }
}

// Converts Doge-speak back to binary
class DogeToBinary {
    static dogeToBinary(dogeText) {
        const dogePhrases = ["Much", "So", "Very", "Such", "Wow"];
        const words = dogeText.split(/[\s.]+/);
        let binaryResult = [];

        words.forEach((word) => {
            const index = dogePhrases.indexOf(word);
            if (index !== -1) {
                binaryResult.push("1");
            } else {
                binaryResult.push("0");
            }
        });

        return binaryResult.join(" ");
    }
}

class DogeCompiler {
    static compileToDoge(text) {
        // Step 1: Convert text to binary
        const binaryText = BinaryEncoder.textToBinary(text);

        // Step 2: Convert binary to Doge-speak
        return BinaryToDoge.binaryToDoge(binaryText);
    }

    static decompileToEnglish(dogeText) {
        const binaryText = DogeToBinary.dogeToBinary(dogeText);

        return BinaryDecoder.binaryToText(binaryText);
    }
}

export default DogeCompiler;
