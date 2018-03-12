import { doSort } from './sort.helper';


describe('SortHelper - doSort method:', () => {

  it('should return sort ASC when param sortBy.direction is ASC', () => {
    const items = [
      {name: 'XPTO'},
      {name: '7 DAYS TO DIE'},
      {name: 'ABZU'},
    ];
    doSort(items, {field: 'name', direction: 'ASC'});

    expect(items[0]).toEqual({name: '7 DAYS TO DIE'});
    expect(items[1]).toEqual({name: 'ABZU'});
    expect(items[2]).toEqual({name: 'XPTO'});
  });

  it('should return sort DESC when param sortBy.direction is DESC', () => {
    const items = [
      {name: 'XPTO'},
      {name: '7 DAYS TO DIE'},
      {name: 'ABZU'},
    ];
    doSort(items, {field: 'name', direction: 'DESC'});

    expect(items[2]).toEqual({name: '7 DAYS TO DIE'});
    expect(items[1]).toEqual({name: 'ABZU'});
    expect(items[0]).toEqual({name: 'XPTO'});
  });

  describe('Not sort when:', () => {
    it('not pass sortBy param', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      doSort(items, null);
      expect(items[0]).toEqual({name: 'XPTO'});
      expect(items[1]).toEqual({name: '7 DAYS TO DIE'});
      expect(items[2]).toEqual({name: 'ABZU'});
    });

    it('missing sortBy.direction param or pass diferent of ASC or DESC', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      doSort(items, {field: 'name'});
      expect(items[0]).toEqual({name: 'XPTO'});
      expect(items[1]).toEqual({name: '7 DAYS TO DIE'});
      expect(items[2]).toEqual({name: 'ABZU'});
    });

    it('missing sortBy.field param ', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      doSort(items, {direction: 'ASC'});
      expect(items[0]).toEqual({name: 'XPTO'});
      expect(items[1]).toEqual({name: '7 DAYS TO DIE'});
      expect(items[2]).toEqual({name: 'ABZU'});
    });

    it('passing sortBy.field param that not exists', () => {
      const items = [
        {name: 'XPTO'},
        {name: '7 DAYS TO DIE'},
        {name: 'ABZU'},
      ];
      doSort(items, {field: 'price', direction: 'ASC'});
      expect(items[0]).toEqual({name: 'XPTO'});
      expect(items[1]).toEqual({name: '7 DAYS TO DIE'});
      expect(items[2]).toEqual({name: 'ABZU'});
    });

    it('not passing array of object', () => {
      const items = [3, 'Home', 4];
      doSort(items, {field: 'name', direction: 'DESC'});
      expect(items[2]).toEqual(4);
      expect(items[1]).toEqual('Home');
      expect(items[0]).toEqual(3);
    });
  });

});
