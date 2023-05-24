const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const open = 'The zoo is open';
  const closed = 'The zoo is closed';
  it('', () => {
    const obj = {
      Friday: { open: 10, close: 8 },
      Monday: { open: 0, close: 0 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Thursday: { open: 10, close: 8 },
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
    };
    expect(getOpeningHours()).toMatchObject(obj);
  });
  it('zoologico esta fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });
  it('zoologico esta aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });
  it('erro de dia', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrowError('The day must be valid. Example: Monday');
  });
  it('erro de periodo', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('erro de horario', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrowError('The hour should represent a number');
  });
  it('erro de horario#2', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrowError('The minutes should represent a number');
  });
  it('erro de numero hora 16', () => {
    expect(() => { getOpeningHours('Sunday', '16:00-AM'); }).toThrowError('The hour must be between 0 and 12');
  });
  it('erro de numero minuto 80', () => {
    expect(() => { getOpeningHours('Sunday', '11:80-AM'); }).toThrowError('The minutes must be between 0 and 59');
  });
  it('arrumar no horario 0', () => {
    expect(getOpeningHours('Sunday', '12:00-AM')).toBe(closed);
    expect(getOpeningHours('Sunday', '12:00-PM')).toBe(open);
  });
  it('arrumar no horario 0', () => {
    expect(getOpeningHours('Sunday', '12:00-PM')).toBe(open);
  });
});
