import IMailTemplaplateProvider from '../models/IMailTemplateProvider';

export default class FakeMailTemplateProvider
    implements IMailTemplaplateProvider {
    public async parse(): Promise<string> {
        return 'Mail content';
    }
}
