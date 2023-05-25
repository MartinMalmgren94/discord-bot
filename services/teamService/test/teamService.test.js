const { teamRandomizer, buildResponseString } = require("../teamService");
const { teamOfFour, teamOfTwo, teamOfSix, teamOfFifteen } = require("./mock");

test('testing senario with 2 teams with 2 players in each', () => {
    const result = teamRandomizer({ numberOfTeams: 2, users: teamOfFour });
    
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveLength(2);
    expect(result[1]).toHaveLength(2);
    expect(result[0]?.includes(player => result[1]?.includes(player)))
});

test('testing senario with 2 teams with 1 player in each', () => {
    const result = teamRandomizer({ numberOfTeams: 2, users: teamOfTwo });
    
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveLength(1);
    expect(result[1]).toHaveLength(1);
    expect(result[0]?.includes(player => result[1]?.includes(player)))
});

test('testing senario with 3 teams with 2 player in each', () => {
    const result = teamRandomizer({ numberOfTeams: 3, users: teamOfSix });
    
    expect(result).toHaveLength(3);
    expect(result[0]).toHaveLength(2);
    expect(result[1]).toHaveLength(2);
    expect(result[2]).toHaveLength(2);
    expect(result[0]?.includes(player => result[1]?.includes(player)))
    expect(result[0]?.includes(player => result[2]?.includes(player)))
    expect(result[1]?.includes(player => result[2]?.includes(player)))
});

test('testing senario with 3 teams with 15 player in each', () => {
    const result = teamRandomizer({ numberOfTeams: 3, users: teamOfFifteen });
    
    expect(result).toHaveLength(3);
    expect(result[0]).toHaveLength(5);
    expect(result[1]).toHaveLength(5);
    expect(result[2]).toHaveLength(5);
    expect(result[0]?.includes(player => result[1]?.includes(player)))
    expect(result[0]?.includes(player => result[2]?.includes(player)))
    expect(result[1]?.includes(player => result[2]?.includes(player)))
});

test('testing buildingResponseString', () => {
    const teams = teamRandomizer({ numberOfTeams: 2, users: teamOfFour });
    const result = buildResponseString({ teams });
    expect(result).toBeDefined();
    expect(result).toHaveLength(49);
})