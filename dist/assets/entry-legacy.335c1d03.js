System.register(["./index-legacy.aa73ea33.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.bR}],execute:function(){var r={backup:"备份",restore:"恢复",start_backup:"开始备份",finish_backup:"完成备份",success_backup_item:"[ {{item}} ] 备份成功",failed_backup_item:"[ {{item}} ] 备份失败",no_file:"未选择文件",start_restore:"开始恢复",finish_restore:"完成恢复",success_restore_item:"[ {{item}} ] 恢复成功",failed_restore_item:"[ {{item}} ] 恢复失败",override:"覆盖"},i={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",username:"Username"},"123PanLink":{origin_urls:"Origin urls","origin_urls-tips":"structure:FolderName:\n  [FileSize:][Modified:]Url",private_key:"Private key",uid:"Uid",valid_duration:"Valid duration","valid_duration-tips":"minutes"},"123PanShare":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",sharekey:"Sharekey",sharepassword:"Sharepassword"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32",username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:{paths:"Paths"},Aliyundrive:{internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},AliyundriveOpen:{client_id:"客户端 ID","client_id-tips":"如果您没有客户端 ID，请保留为空",client_secret:"客户端密钥","client_secret-tips":"如果您没有客户端密钥，请保留为空",drive_type:"驱动类型",drive_types:{backup:"备份",default:"默认",resource:"资源"},internal_upload:"内部上传","internal_upload-tips":"如果您正在使用位于北京的阿里云 ECS，可以打开此选项以提高上传速度",livp_download_format:"Livp 下载格式",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth 令牌 URL",order_by:"排序方式",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"更新时间"},order_direction:"排序顺序",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"快速上传","rapid_upload-tips":"如果启用此选项，文件将首先上传到服务器，因此进度将不正确",refresh_token:"刷新令牌",remove_way:"删除方式",remove_ways:{delete:"删除",trash:"移到回收站"},root_folder_id:"根文件夹 ID"},AliyundriveShare:{order_by:"排序方式",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"更新时间"},order_direction:"排序顺序",order_directions:{ASC:"升序",DESC:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夹 ID",share_id:"分享 ID",share_pwd:"分享密码"},BaiduNetdisk:{client_id:"Client id",client_secret:"Client secret",custom_crack_ua:"Custom crack ua",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path",upload_api:"Upload api",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},BaiduPhoto:{album_id:"Album id",client_id:"Client id",client_secret:"Client secret",delete_origin:"Delete origin",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},BaiduShare:{BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},Cloudreve:{address:"Address",cookie:"Cookie",custom_ua:"Custom ua",password:"Password",root_folder_path:"Root folder path",username:"Username"},Crypt:{directory_name_encryption:"Directory name encryption",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"Encrypted suffix","encrypted_suffix-tips":"for advanced user only! encrypted files will have this suffix",filename_encoding:"Filename encoding","filename_encoding-tips":"for advanced user only!",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"Filename encryption",filename_encryptions:{obfuscate:"Obfuscate",off:"Off",standard:"Standard"},password:"Password","password-tips":"the main password",remote_path:"Remote path","remote_path-tips":"This is where the encrypted data stores",salt:"Salt","salt-tips":"If you don't know what is salt, treat it as a second password. Optional but recommended"},Dropbox:{client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",oauth_token_url:"Oauth token url",refresh_token:"Refresh token",root_folder_path:"Root folder path"},FTP:{address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},GoogleDrive:{chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},GooglePhoto:{client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:{account:"Account",baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",password:"Password",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{account:"Account",cookie:"Cookie",url:"Url"}},Local:{mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},MediaTrack:{access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},Mega_nz:{email:"Email",password:"Password"},MoPan:{cloud_id:"Cloud id",device_info:"Device info",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",phone:"Phone",root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},Onedrive:{chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},OnedriveAPP:{chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},PikPak:{disable_media_link:"Disable media link",password:"Password",root_folder_id:"Root folder id",username:"Username"},PikPakShare:{password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},Quark:{cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},S3:{access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},SFTP:{address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},SMB:{address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},Seafile:{address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},Teambition:{cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},Terabox:{cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},js_token:"Js token",order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},Thunder:{captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},ThunderExpert:{algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},Trainbit:{AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},UC:{cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},USS:{anti_theft_chain_token:"Anti theft chain token",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},UrlTree:{head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":"structure:FolderName:\n  [FileName:][FileSize:][Modified:]Url"},Virtual:{max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},WebDav:{address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},WeiYun:{cookies:"Cookies",order_by:"Order by",order_bys:{name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"4<=thread<=32"},WoPan:{access_token:"Access token",family_id:"Family id","family_id-tips":"Keep it empty if you want to use your personal drive",refresh_token:"Refresh token",root_folder_id:"Root folder id",sort_rule:"Sort rule",sort_rules:{name_asc:"Name asc",name_desc:"Name desc",size_asc:"Size asc",size_desc:"Size desc",time_asc:"Time asc",time_desc:"Time desc"}},YandexDisk:{client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},config:{"115 Cloud":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:"There may be an infinite loop bug in this driver.\nDeprecated, no longer maintained and will be removed in a future version.\nWe recommend using the official driver AliyundriveOpen."},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},Crypt:{},Dropbox:{},FTP:{},GoogleDrive:{},GooglePhoto:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"This network disk may store your password in clear text. Please set your password carefully"},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},drivers:{"115 Cloud":"115 Cloud","123Pan":"123Pan","123PanLink":"123PanLink","123PanShare":"123PanShare","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",Cloudreve:"Cloudreve",Crypt:"Crypt",Dropbox:"Dropbox",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",Virtual:"Virtual",WebDav:"WebDav",WeiYun:"WeiYun",WoPan:"WoPan",YandexDisk:"YandexDisk"}},t={refresh:"刷新",add:"添加",edit:"编辑",delete:"删除",save:"保存",update:"更新",copied:"已复制",delete_success:"删除成功",save_success:"保存成功",update_success:"更新成功",choose:"选择",confirm:"确认",cancel:"取消",delete_confirm:"您确定要删除 [{{name}}] 吗？",operations:"操作",yes:"是",no:"否",clear:"清除",choose_folder:"选择文件夹",choose_or_input_path:"选择文件夹或输入路径",disable:"禁用",enable:"启用",ok:"确定",back:"返回",have_account:"已有账号？",go_login:"去登录",close:"关闭",no_support_now:"目前不支持",empty_input:"请输入"},a={obj:{name:"名称",size:"大小",modified:"修改日期"},preview:{download:"下载",failed_load_img:"加载图像失败",open_with:"使用以下方式打开...",install:"安装",installing:"正在安装","tr-install":"TrollStore","tr-installing":"TrollStore 安装中",open_in_new_window:"在新窗口中打开",auto_next:"自动下一个"},layouts:{list:"列表视图",grid:"网格视图",image:"图像视图"},no_images:"当前文件夹中没有图像",load_more:"加载更多",no_more:"没有更多",input_password:"请输入密码",toolbar:{more:"更多",refresh:"刷新",toggle_theme:"切换主题",switch_lang:"切换语言",toggle_checkbox:"切换复选框",rename:"重命名",input_new_name:"输入新名称","only_one-tips":"只能选择一个对象进行重命名",move:"移动",copy:"复制",choose_dst_folder:"选择目标文件夹",delete:"删除","delete-tips":"确定要删除所选对象吗？",copy_link:"复制链接",preview_page:"预览页面",down_link:"下载链接",encode_down_link:"编码下载链接",mkdir:"新建文件夹",input_dir_name:"输入文件夹名称",new_file:"新建文件",input_filename:"输入文件名",cancel_select:"取消选择",offline_download:"离线下载","offline_download-tips":"每行一个 URL",download:"下载",batch_download:"批量下载",package_download:"打包下载",package_download_disabled:"打包下载已禁用",send_aria2:"发送至 Aria2",aria2_not_set:"请设置 Aria2 RPC URL",send_aria2_success:"成功发送至 Aria2","pre_package_download-tips":"在浏览器中使用 streamsaver 而不是服务器进行打包下载需要相应的存储支持 CORS，不支持的存储将失败。","package_download-tips":"下载中，请不要关闭页面",upload:"上传",local_settings:"本地设置",recursive_move:"递归移动","recursive_move_directory-tips":"确定要将当前文件夹及其子文件夹中的所有文件移动到指定文件夹吗？",remove_empty_directory:"删除空文件夹","remove_empty_directory-tips":"确定要删除所有空子文件夹吗？",batch_rename:"批量重命名",regex_rename:"正则表达式重命名",sequential_renaming:"顺序重命名",regex_rename_preview:"已更改的文件",regex_rename_preview_old_name:"旧名称",regex_rename_preview_new_name:"新名称",regular_rename:"使用正则表达式对文件进行重命名。在第一行输入源文件名正则表达式，在第二行输入新文件名正则表达式。",sequential_renaming_desc:"新文件名将附加一个数字起始值，并通过将起始值加1来按顺序显示。在第一行输入新文件名，在第二行输入起始值。"},upload:{add_as_task:"添加为任务","upload-tips":"拖拽文件到此处上传，或点击：",release:"释放以上传",no_files_drag:"未拖拽任何文件。",upload_files:"选择文件",upload_folder:"选择文件夹",pending:"等待中",uploading:"上传中",backending:"后台上传中",success:"成功",error:"错误",back:"返回上传",clear_done:"清除已完成"},local_settings:{aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC 密钥",aria2_dir:"Aria2 下载目录",show_folder_in_image_view:"在图像视图中显示文件夹",show_folder_in_image_view_options:{top:"顶部",bottom:"底部",none:"不显示"},global_default_layout:"全局默认布局",global_default_layout_options:{list:"列表视图",grid:"网格视图",image:"图像视图"}},package_download:{current_status:"当前状态",initializing:"初始化中",fetching_struct:"获取文件夹结构",fetching_struct_failed:"获取文件夹结构失败",downloading:"正在下载文件，请不要关闭或刷新页面",failed:"打包下载失败",success:"下载完成"},footer:{powered_by:"由 AList-dk 提供支持",manage:"管理"},search:{search:"搜索",no_result:"尚无结果",scopes:{all:"全部",folder:"文件夹",file:"文件"}},fetching_settings_failed:"获取设置失败：",get_current_user_failed:"获取当前用户失败：","Loading storage, please wait":"加载存储中，请稍候"},s={search_index:"搜索索引",current:"当前索引",build:"构建索引",rebuild:"重建索引",paths_to_update:"更新路径",max_depth:"最大深度",update:"更新索引",obj_count:"对象计数",last_done_time:"上次完成时间",unknown:"未知",stop:"停止",clear:"清除",error:"错误"},d={login_to:"登录到","username-tips":"输入您的用户名","password-tips":"输入您的密码","otp-tips":"输入您的 OTP 代码",remember:"记住我",forget:"忘记密码？",forget_url:"https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",clear:"清除",login:"登录",use_guest:"以访客身份浏览",success:"登录成功"},n={sidemenu:{dashboard:"仪表盘",settings:"设置",site:"站点",style:"样式",preview:"预览",global:"全局",other:"其他",users:"用户",storages:"存储",metas:"元数据",profile:"个人资料",about:"关于",tasks:"任务",aria2:"Aria2",upload:"上传",copy:"复制","backup-restore":"备份和恢复",home:"主页",indexes:"索引",sso:"单一登录",qbit:"qBittorrent",docs:"文档"},title:"AList 管理",not_admin:"您不是管理员用户，请使用管理员帐户登录。",logout_success:"成功注销",send:"发送",receive:"接收",received_msgs:"接收的消息","add_storage-tips":"您可能需要在新打开的选项卡中填写一些信息。","messenger-tips":"您可能需要根据提示在此选项卡中填写一些信息。"},_={path:"路径",password:"密码",write:"写入",hide:"隐藏",readme:"自述文件",apply_sub:"应用于子文件夹",hide_help:"每行一个正则表达式",readme_help:"支持Markdown内容或Markdown链接"},l={allow_indexed:"允许索引",allow_mounted:"允许挂载",announcement:"公告",aria2_secret:"Aria2 密钥",aria2_uri:"Aria2 URI",audio_autoplay:"音频自动播放",audio_cover:"音频封面",audio_types:"音频类型",auto_update_index:"自动更新索引",customize_body:"自定义正文",customize_head:"自定义头部",default_page_size:"默认页面大小",external_previews:"外部预览",favicon:"网站图标",filename_char_mapping:"文件名字符映射",forward_direct_link_params:"转发直链参数",hide_files:"隐藏文件",home_container:"主页容器",home_containers:{hope_container:"希望容器",max_980px:"最大 980px"},home_icon:"主页图标",iframe_previews:"嵌入式预览",ignore_paths:"忽略路径","ignore_paths-tips":"每行一个路径",image_types:"图片类型",index_progress:"索引进度",link_expiration:"链接过期",logo:"标志",main_color:"主色调",max_index_depth:"最大索引深度","max_index_depth-tips":"索引的最大深度",ocr_api:"OCR API",package_download:"软件包下载",pagination_type:"分页类型",pagination_types:{all:"所有",auto_load_more:"自动加载更多",load_more:"加载更多",pagination:"分页"},privacy_regs:"隐私规定",proxy_ignore_headers:"代理忽略头部",proxy_types:"代理类型",qbittorrent_seedtime:"Qbittorrent 种子时间",qbittorrent_url:"Qbittorrent 网址",robots_txt:"Robots txt",search_index:"搜索索引",search_indexs:{bleve:"Bleve",database:"数据库",database_non_full_text:"数据库非全文",none:"无"},settings_layout:"设置布局",settings_layouts:{list:"列表",responsive:"响应式"},sign_all:"全部签名",site_title:"网站标题",sso_application_name:"SSO 应用名称",sso_auto_register:"SSO 自动注册",sso_client_id:"SSO 客户端 ID",sso_client_secret:"SSO 客户端密钥",sso_default_dir:"SSO 默认目录",sso_default_permission:"SSO 默认权限",sso_endpoint_name:"SSO 端点名称",sso_jwt_public_key:"SSO JWT 公钥",sso_login_enabled:"启用 SSO 登录",sso_login_platform:"SSO 登录平台",sso_login_platforms:{Casdoor:"Casdoor",Dingtalk:"钉钉",Github:"Github",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},sso_organization_name:"SSO 组织名称",text_types:"文本类型",token:"令牌",version:"版本",video_autoplay:"视频自动播放",video_types:"视频类型",webauthn_login_enabled:"启用 Webauthn 登录"},c={aria2:"Aria2",aria2_version:"Aria2 版本：",set_aria2:"设置 Aria2",copy_token:"复制令牌",reset_token:"重置令牌",reset_token_success:"令牌重置成功",unknown_type:"未知类型",set_qbit:"设置 qBittorrent",qbittorrent:"qBittorrent"},p={common:{mount_path:"挂载路径","mount_path-tips":"您希望挂载的路径，它是唯一的，不能重复",driver:"驱动程序",order:"排序","order-tips":"用于排序",status:"状态",remark:"备注",cache_expiration:"缓存过期","cache_expiration-tips":"此存储的缓存过期时间（分钟）",down_proxy_url:"下载代理 URL",web_proxy:"Web 代理",webdav_policy:"WebDAV 策略",webdav_policys:{"302_redirect":"302 重定向",use_proxy_url:"使用代理 URL",native_proxy:"本地代理"},order_by:"排序方式",order_bys:{name:"名称",size:"大小",modified:"修改日期"},order_direction:"排序方向",order_directions:{asc:"升序",desc:"降序"},extract_folder:"提取文件夹",extract_folders:{front:"提取到前面",back:"提取到后面"},enable_sign:"启用签名"},other:{start_load_success:"开始加载",load_all:"重新加载全部",filter_by_driver:"按驱动程序筛选",table_layout:"表格布局"}},u={aria2_down:"下载文件到本地设备",aria2_transfer:"将已下载文件传输到相应的存储",qbit_down:"下载文件到本地设备",qbit_transfer:"将已下载文件传输到相应的存储",upload:"将文件上传到相应的存储",copy:"从一个存储复制文件到另一个存储",done:"已完成",undone:"运行中",pending:"待处理",running:"运行中",canceling:"取消中",succeeded:"已成功",canceled:"已取消",errored:"发生错误",clear_succeeded:"清除已成功任务",retry:"重试"},h={permissions:{see_hides:"可以查看隐藏文件",access_without_password:"无需密码访问",offline_download:"添加离线下载任务",write:"创建目录或上传文件",rename:"重命名",move:"移动",copy:"复制",delete:"删除",webdav_read:"WebDAV 读取",webdav_manage:"WebDav 管理"},username:"用户名",password:"密码",base_path:"基础路径",role:"角色",permission:"权限",disabled:"已禁用",available:"可用",update_profile:"更新个人资料",update_profile_success:"个人资料更新成功，请重新登录。",change_username:"更改用户名",change_password:"更改密码","change_password-tips":"如果不想更改密码，请保留密码为空",confirm_password:"确认密码","confirm_password-tips":"重复输入刚刚输入的密码",confirm_password_not_same:"两次输入的密码不一致",enable_2fa:"启用双因素认证 (2FA)",cancel_2fa:"取消双因素认证 (2FA)",cancel_2fa_success:"成功取消双因素认证 (2FA)","2fa_already_enabled":"双因素认证 (2FA) 已启用",scan_qr:"扫描二维码以保存密钥",or_manual:"或手动输入密钥",input_code:"输入您的双因素认证 (2FA) 应用程序代码",verify:"验证","guest-tips":"您当前以访客身份访问。",modify_nothing:"因此，您无法在管理页面中进行任何修改。",sso_login:"单点登录",connect_sso:"连接单点登录平台",disconnect_sso:"断开单点登录平台连接",webauthn:"WebAuthn",add_webauthn:"添加 WebAuthn 凭证",add_webauthn_success:"成功添加 WebAuthn 凭证！",webauthn_not_supported:"您的浏览器不支持 WebAuthn 或者您处于不安全的来源"},m=Object.assign({"./br.json":r,"./drivers.json":i,"./global.json":t,"./home.json":a,"./index.json":o,"./indexes.json":s,"./login.json":d,"./manage.json":n,"./metas.json":_,"./settings.json":l,"./settings_other.json":c,"./storages.json":p,"./tasks.json":u,"./users.json":h}),f=e("default",{});for(var y in m)f[y.split("/")[1].split(".")[0]]=m[y]}}}));
