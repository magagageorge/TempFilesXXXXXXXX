import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsNavBarComponent } from './ads-nav-bar/ads-nav-bar.component';
import { AdsMainContentComponent } from './ads-main-content/ads-main-content.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '@app/theme/theme.module';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsNavTabsWidgetComponent } from './widgets/ads-nav-tabs-widget/ads-nav-tabs-widget.component';
import { CreateAdAccountFormModalComponent } from './modals/create-ad-account-form-modal/create-ad-account-form-modal.component';
import { OverlayContentModalComponent } from './modals/overlay-content-modal/overlay-content-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdContentFormWidgetComponent } from './widgets/ad-content-form-widget/ad-content-form-widget.component';
import { AdPreviewWidgetComponent } from './widgets/ad-preview-widget/ad-preview-widget.component';
import { AdPostPreviewWidgetComponent } from './widgets/ad-post-preview-widget/ad-post-preview-widget.component';
import { WfLinkifyModule } from '@app/libs/wf-linkify';
import { AdPostCatalogWidgetComponent } from './widgets/ad-post-catalog-widget/ad-post-catalog-widget.component';
import { AdTextPreviewWidgetComponent } from './widgets/ad-text-preview-widget/ad-text-preview-widget.component';
import { AdsProcessingRequestOverlayComponent } from './widgets/ads-processing-request-overlay/ads-processing-request-overlay.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AdsNavBarComponent, AdsMainContentComponent, AdsNavTabsWidgetComponent, CreateAdAccountFormModalComponent, OverlayContentModalComponent, AdContentFormWidgetComponent, AdPreviewWidgetComponent, AdPostPreviewWidgetComponent, AdPostCatalogWidgetComponent, AdTextPreviewWidgetComponent, AdsProcessingRequestOverlayComponent],
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    WfLinkifyModule,
    TranslateModule
  ],
  exports: [AdsNavBarComponent, AdsMainContentComponent,AdsNavTabsWidgetComponent, CreateAdAccountFormModalComponent, OverlayContentModalComponent, AdContentFormWidgetComponent, AdPreviewWidgetComponent, AdPostPreviewWidgetComponent, AdPostCatalogWidgetComponent, AdTextPreviewWidgetComponent, AdsProcessingRequestOverlayComponent],
})
export class AdsThemeModule { }
