function passwords(n) {
    const str = '@#$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var passes = Array();
    for (let i = 0; i < n; i++) {
        let pass = '';
        for (let j = 1; j <= 8; j++) {
            var char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        passes.push({ id: i, password: pass });
    }
    passes.sort((a, b) => String(a.password).localeCompare(b.password));
    return passes;
}

module.exports = { passwords }