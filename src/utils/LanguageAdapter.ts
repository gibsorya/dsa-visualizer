export default interface LanguageAdapter {
    compile(code: string): Promise<string>;
    execute(compiledCode: string): Promise<void>;
    getMonacoLanguage(): string;
    injectVisualizationHooks?(code: string): string;
}
