import type LanguageAdapter from "./LanguageAdapter";
import * as esbuild from 'esbuild-wasm';

await esbuild.initialize({
    wasmURL: 'https://unpkg.com/esbuild-wasm/esbuild.wasm'
});

export default class TypeScriptAdapter implements LanguageAdapter {
    async compile(code: string): Promise<string> {
        const options: esbuild.TransformOptions = {
            loader: 'ts',
            target: 'es2020'
        }

        const result = await esbuild.transform(code, options);

        return result.code;
    }

    async execute(compiledCode: string): Promise<void> {
        try {
            const fn = new Function(compiledCode);
            fn();
        } catch (err) {
            console.error("Execution error:", err);
        }
    }

    getMonacoLanguage(): string {
        return 'typescript';
    }
}