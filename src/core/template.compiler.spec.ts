import templateCompiler from "./template.compiler.ts";

describe('templateCompiler', () => {
    const firstResponse = {
        ok: true,
        text: jest.fn().mockResolvedValueOnce('<h3>Hello</h3>')
    }
    const secondResponse = {
        ok: true,
        text: jest.fn().mockResolvedValueOnce('<h3>SecondResponse</h3>')
    }
    const mockHTML = jest.fn().mockResolvedValueOnce(firstResponse).mockResolvedValueOnce(secondResponse);

    beforeEach(() => {
        global.fetch = mockHTML
    })

    it('should return the HTML of a template', async () => {
        const result = await templateCompiler.compile('testUrl');
        expect(result).toStrictEqual('<h3>Hello</h3>');
    });

    it('should return the HTML from cache the second time its called', async () => {
        const result = await templateCompiler.compile('testUrl');
        const secondaryCall = await templateCompiler.compile('testUrl');
        expect(result).toStrictEqual('<h3>Hello</h3>');
        expect(secondaryCall).toStrictEqual('<h3>Hello</h3>');
    })
    it('should return the HTML if something else is called', async () => {
        const result = await templateCompiler.compile('testUrl');
        const secondaryCall = await templateCompiler.compile('secondCall');
        expect(result).toStrictEqual('<h3>Hello</h3>');
        expect(secondaryCall).toStrictEqual('<h3>SecondResponse</h3>');
    })
})