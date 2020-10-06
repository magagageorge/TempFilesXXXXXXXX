import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PhotosPageComponent } from './pages/photos-page/photos-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ThemeModule } from '@app/theme/theme.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WfHoverCardModule } from '@app/libs/wf-hover-card/wf-hover-card.module';
import { ImageCropperModule } from '@app/libs/wb-image-cropper';
import { PageHeaderComponent } from './widgets/page-header/page-header.component';
import { PageActionsButtonsWidgetComponent } from './widgets/page-actions-buttons-widget/page-actions-buttons-widget.component';
import { PageTitleWidgetComponent } from './widgets/page-title-widget/page-title-widget.component';
import { PageNavWidgetComponent } from './widgets/page-nav-widget/page-nav-widget.component';
import { PageAboutWidgetComponent } from './widgets/page-about-widget/page-about-widget.component';
import { WbPageMainContentComponent } from './layouts/wb-page-main-content/wb-page-main-content.component';
import { WbPageManagerContentContainerComponent } from './layouts/wb-page-manager-content-container/wb-page-manager-content-container.component';
import { PageManagerLeftMenuWidgetComponent } from './widgets/page-manager-left-menu-widget/page-manager-left-menu-widget.component';
import { WbPageContentRoutingComponent } from './layouts/wb-page-content-routing/wb-page-content-routing.component';
import { CropPagePictureWidgetComponent } from './widgets/edit-widgets/crop-page-picture-widget/crop-page-picture-widget.component';
import { CropPageCoverWidgetComponent } from './widgets/edit-widgets/crop-page-cover-widget/crop-page-cover-widget.component';
import { EditPagePictureOptionsWidgetComponent } from './widgets/edit-widgets/edit-page-picture-options-widget/edit-page-picture-options-widget.component';
import { EditPageCoverOptionsWidgetComponent } from './widgets/edit-widgets/edit-page-cover-options-widget/edit-page-cover-options-widget.component';
import { EditPageOverlayContainerComponent } from './widgets/edit-page-overlay-container/edit-page-overlay-container.component';
import { EditPageInfoWidgetComponent } from './widgets/edit-widgets/edit-page-info-widget/edit-page-info-widget.component';
import { CreatePagePostButtonsWidgetsComponent } from './widgets/create-page-post-buttons-widgets/create-page-post-buttons-widgets.component';
import { PageFeedWidgetComponent } from './widgets/page-feed-widget/page-feed-widget.component';
import { WfLinkPreviewModule } from '@app/libs/wf-link-preview';
import { WfLinkifyModule } from '@app/libs/wf-linkify';
import { PagePhotosSummaryWidgetComponent } from './widgets/page-photos-summary-widget/page-photos-summary-widget.component';
import { PagePhotosWidgetComponent } from './widgets/page-photos-widget/page-photos-widget.component';
import { PageImagesOverlayViewComponent } from './widgets/page-images-overlay-view/page-images-overlay-view.component';
import { WbPageNotificationsComponent } from './pages/page-manager/wb-page-notifications/wb-page-notifications.component';
import { WbPageGeneralSettingsComponent } from './pages/page-manager/wb-page-general-settings/wb-page-general-settings.component';
import { PageAdminsComponent } from './pages/page-manager/page-admins/page-admins.component';
import { PageManagerTopMenuWidgetComponent } from './widgets/page-manager-top-menu-widget/page-manager-top-menu-widget.component';
import { WbPageManageComponent } from './pages/page-manager/wb-page-manage/wb-page-manage.component';
import { WbPageNotificationSettingsComponent } from './pages/page-manager/wb-page-notification-settings/wb-page-notification-settings.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    WfLinkifyModule,
    WfLinkPreviewModule.forRoot(),
    WfHoverCardModule.forRoot(),
    ImageCropperModule
  ],
  declarations: [PageComponent, HomePageComponent, AboutPageComponent, PhotosPageComponent, ProductsPageComponent, ServicesPageComponent, ShopPageComponent, PageHeaderComponent, PageActionsButtonsWidgetComponent, PageTitleWidgetComponent, PageNavWidgetComponent, PageAboutWidgetComponent, WbPageMainContentComponent, WbPageManagerContentContainerComponent, PageManagerLeftMenuWidgetComponent, WbPageContentRoutingComponent, CropPagePictureWidgetComponent, CropPageCoverWidgetComponent, EditPagePictureOptionsWidgetComponent, EditPageCoverOptionsWidgetComponent, EditPageOverlayContainerComponent, EditPageInfoWidgetComponent, CreatePagePostButtonsWidgetsComponent, PageFeedWidgetComponent, PagePhotosSummaryWidgetComponent, PagePhotosWidgetComponent, PageImagesOverlayViewComponent, WbPageNotificationsComponent, WbPageGeneralSettingsComponent, PageAdminsComponent, PageManagerTopMenuWidgetComponent, WbPageManageComponent, WbPageNotificationSettingsComponent],
  exports: [PageComponent, HomePageComponent, AboutPageComponent, PhotosPageComponent, ProductsPageComponent, ServicesPageComponent, ShopPageComponent, PageHeaderComponent, WbPageMainContentComponent,WbPageManagerContentContainerComponent, PageManagerLeftMenuWidgetComponent, WbPageContentRoutingComponent, CropPagePictureWidgetComponent, CropPageCoverWidgetComponent, EditPagePictureOptionsWidgetComponent, EditPageCoverOptionsWidgetComponent, EditPageOverlayContainerComponent, EditPageInfoWidgetComponent,CreatePagePostButtonsWidgetsComponent]
})
export class PageModule { }
