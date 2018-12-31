import {core, flags, SfdxCommand} from '@salesforce/command';
import {AnyJson} from '@salesforce/ts-types';

// Initialize Messages with the current plugin directory
core.Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = core.Messages.loadMessages('sfdx-just-xml-plugin', 'org');

export default class Org extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
  `$ sfdx just:xml --init
Sample .justxml configuration created
  `,
  `$ sfdx just-xml
File(s) udpated:

  force-app/main/default/profiles/Admin.profile-meta.xml
  `
  ];

  protected static flagsConfig = {
    init: flags.boolean({char: 'i', description: messages.getMessage('initFlagDescription')}),
    path: flags.string({char: 'p', description: messages.getMessage('pathFlagDescription')})
  };

  // Comment this out if your command does not require an org username
  //protected static requiresUsername = true;

  // Comment this out if your command does not support a hub org username
  //protected static supportsDevhubUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    
    // Define and displya an output string
    let outputString = `Something witty goes here.`;
    this.ux.log(outputString);

    // Return an object to be displayed with --json
    return { name: this.flags.name, outputString };
  }
}
