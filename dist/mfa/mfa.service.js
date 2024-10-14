"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MfaService = void 0;
const common_1 = require("@nestjs/common");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
let MfaService = class MfaService {
    async generateMfaSecret(generateMfaSecretDto) {
        const secret = speakeasy.generateSecret({
            name: `Authentication (${generateMfaSecretDto.email})`
        });
        const qrCodeImage = qrcode.toDataUrl(secret.otpauth_url);
    }
};
exports.MfaService = MfaService;
exports.MfaService = MfaService = __decorate([
    (0, common_1.Injectable)()
], MfaService);
//# sourceMappingURL=mfa.service.js.map