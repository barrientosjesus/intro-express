const jedis = [
    { name: 'Yoda', master: true },
    { name: 'Obi-Wan Kenobi', master: true },
    { name: 'Qui-Gon Jinn', master: true },
    { name: 'Luke Skywalker', master: true },
    { name: 'Mace Windu', master: true },
    { name: 'Anakin Skywalker', master: false },
    { name: 'Ahsoka Tano', master: false }
];

module.exports = {
    getAll: function () {
        return jedis;
    },
    getOne: function (n) {
        return jedis.find(jedi => jedi.name === n);
    }
};