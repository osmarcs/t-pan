import { doFilter } from './filter.helper';


describe('FilterHelper - doFilter method:', () => {

  it('should return filtered array', () => {
    const items = [
      {name: 'XPTO'},
      {name: '7 DAYS TO DIE'},
      {name: 'ABZU'},
    ];
    const filtered = doFilter(items, {field: 'name', value: 'to'});

    expect(filtered).toEqual([
      {name: 'XPTO'},
      {name: '7 DAYS TO DIE'}
    ]);
  });

  describe ('Should return empty  array when', () => {

    it('passing filterBy.value does not match', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      const filtered = doFilter(items, {field: 'name', value: 'pos'});
      expect(filtered).toEqual([]);
    });

    it('passing filterBy.field that not exists', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      const filtered = doFilter(items, {field: 'description', value: 'a'});
      expect(filtered).toEqual([]);
    });

    it('not passing array of object', () => {
      const items = [
        'XPTO',
        '7 DAYS TO DIE',
        'ABZU',
      ];
      const filtered = doFilter(items, {field: 'name', value: 'a'});
      expect(filtered).toEqual([]);
    });

  });


  describe('Not filter when:', () => {
    it('not pass filterBy param', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      const filtered = doFilter(items, null);
      expect(items).toEqual(filtered);
    });

    it('missing filterBy.value', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      const filtered = doFilter(items, {field: 'name'});
      expect(items).toEqual(filtered);
    });

    it('missing filterBy.field', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      const filtered = doFilter(items, {value: 'a'});
      expect(items).toEqual(filtered);
    });

  });

});
