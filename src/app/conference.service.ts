import { Injectable } from '@angular/core';
import { CredentialsVaultService } from './credentials-vault.service';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
      constructor(
        private credentialsVault: CredentialsVaultService
    ) {}

    async initialize() {
        const credentials = await this.credentialsVault.getCredentials;
    }

}
