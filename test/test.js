/*
 * Copyright (c) 2020
 * Author: Marco Castiello
 * E-mail: marco.castiello@gmail.com
 * Project: IndexMap
 */
 
const IndexMap = require('../src/index-map').default;

describe('Index Map', () => {
    it("should create an extended Map that includes a WeakMap", () => {
        const map = new IndexMap();

        expect(map instanceof IndexMap).toBeTruthy();
        expect(map instanceof Map).toBeTruthy();
        expect(map.weak instanceof WeakMap).toBeTruthy();
    });
    it("should store and read a set of string and object", () => {
        const index = "myIndex";
        const obj = {}
    
        const map = new IndexMap();
        
        map.set(index, obj);
        
        expect(map.has(index)).toBeTruthy();
        expect(map.has(obj)).toBeTruthy();
        expect(map.get(index) === obj).toBeTruthy();
        expect(map.get(obj) === index).toBeTruthy();
    });
    it("should should delete an entry using either index or value", () => {
        const index = "myIndex";
        const obj = {}
    
        const map = new IndexMap();
        
        map.set(index, obj);
        
        expect(map.has(index)).toBeTruthy();
        
        map.delete(index);
        
        expect(map.has(index)).toBeFalsy();
        
        map.set(index, obj);
        
        expect(map.has(obj)).toBeTruthy();
        
        map.delete(obj);
        
        expect(map.has(obj)).toBeFalsy();
    });
});
