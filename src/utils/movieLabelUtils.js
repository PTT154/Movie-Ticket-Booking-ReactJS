export function getRandomLabel() {
    const labels = ["P", "C16", "C18"];
    return labels[Math.floor(Math.random() * labels.length)];
}

export function getLabelColor(label) {
    switch (label) {
        case "P":
            return "bg-green-400";
        case "C16":
            return "bg-orange-400";
        case "C18":
            return "bg-red-500";
        default:
            return "bg-gray-400";
    }
}