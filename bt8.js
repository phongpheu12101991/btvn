//1.
function bai1() {
    const product =
    {
        name: 'Xiaomi rice cooker',
        price: 1700,
        brand: `Xiaomi`,
        color: `White`,
    };
    for (let x in product) {
        console.log(x);
    }

    //1.1  x = property
    //1.2 
    for (let property in product) {
        console.log(`${property} : ${product[property]}`);
    };
};

//2.
function bai2() {
    const task =
    {
        subject: 'Implement login feature',
        createdBy: 'Hoang Ngoc Duc',
        assignTo: 'Nguyen Phuong Nam',
        dueDate: '2019-10-08T18:00:24+0000',
        expectedHours: 0.5,
    };
    var { subject, dueDate } = task;
    console.log(subject);
    console.log(dueDate);
}


//3.
function bai3() {
    var jobSearch = {
        hits: [
            {
                benefits: [
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: '14 tháng lương, đánh giá tăng lương 2 lần/ năm',
                        benefitId: 1
                    },
                    {
                        benefitIconName: 'fa-user-md',
                        benefitName: 'Healthcare Plan',
                        benefitValue: 'Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty',
                        benefitId: 2
                    },
                    {
                        benefitIconName: 'fa-file-image-o',
                        benefitName: 'Paid Leave',
                        benefitValue: 'Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến',
                        benefitId: 3
                    }
                ],
                expiredDate: 1572713999,
                classifiedConfidenceRoles: [
                    0.478965416077008,
                    0.461663685615174
                ],
                visibilityDisplay: 1,
                jobTitle: '02 JAVA Web Developer (Hà Nội)',
                categoryVIs: [
                    'Công nghệ cao',
                    'IT - Phần mềm',
                    'Internet/Online Media'
                ],
                priorityOrder: 1570593423,
                salaryMax: 1000,
                skills: [
                    'Hibernate',
                    'Spring MVC',
                    'JavaScript',
                    'Struts',
                    'Spring Boots'
                ],
                isSalaryVisible: true,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                isShowLogoInSearchResult66: true,
                alias: '02-java-web-developer-ha-noi-1-1-1-1',
                company: 'Yumeshin Vietnam',
                categories: [
                    'Internet/Online Media',
                    'High Technology',
                    'IT - Software'
                ],
                salaryMin: 500,
                timestamp: '20191009111048',
                priorityOrder35: 1570593423,
                priorityOrder57: 1570593423,
                locationVIs: [
                    'Hà Nội'
                ],
                classifiedRoles: [
                    'Developer',
                    'Backend Developer'
                ],
                jobSalary: 1000,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/8c/10756982.png',
                locationIds: [
                    24
                ],
                jobLevelId: 5,
                userId: 5531713,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570593423,
                jobId: 1170673,
                companyId: 298378,
                categoryIds: [
                    66,
                    35,
                    57
                ],
                classifiedConfidenceSkills: [
                    0.955278194281585,
                    0.0277846614949552
                ],
                priorityOrder66: 1570593423,
                locations: [
                    'Ha Noi'
                ],
                jobDescription: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
                isShowLogoInSearchResult35: true,
                isShowLogoInSearchResult57: true,
                publishedDate: 1570075024,
                isPremium: false,
                classifiedSkills: [
                    'Web Design',
                    'HTML/CSS'
                ],
                jobRequirement: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
                _geoloc: {
                    lng: 105.7837524,
                    lat: 21.0168415
                },
                objectID: '1170673',
                _highlightResult: {
                    jobTitle: {
                        value: '02 JAVA <em>Web</em> <em>Developer</em> (Hà Nội)',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Hibernate',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Spring MVC',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'JavaScript',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Struts',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Spring Boots',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Yumeshin Vietnam',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobRequirement: {
                        value: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Tham gia các khoá đào tạo Quản lý, Kỹ năng mềm',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-plane',
                        benefitName: 'Travel Opportunities',
                        benefitValue: 'Company Trip hàng năm (Đã đi: Côn Đảo, Phú Quốc, Sapa,..), Khám sức khoẻ ĐK tại Victoria HealthCare',
                        benefitId: 9
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Lương thưởng theo năng lực',
                        benefitId: 1
                    }
                ],
                expiredDate: 1572627599,
                classifiedConfidenceRoles: [
                    0.704634290870941,
                    0.198554087716295
                ],
                visibilityDisplay: 0,
                jobTitle: 'Android Developer (Fresher/junior & Senior)',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570591715,
                salaryMax: 0,
                skills: [
                    'Java',
                    'Android Ndk',
                    'Android Sdk',
                    'Web Sevice',
                    'Lập Trình Android'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'android-developer-fresher-junior-senior-1-1-1',
                company: 'ARIS Vietnam Co., Ltd',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 300,
                timestamp: '20191009102846',
                priorityOrder35: 1570591715,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Mobile Developer',
                    'Developer'
                ],
                jobSalary: 300,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/40/6215187.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 2484337,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570591715,
                jobId: 1170146,
                companyId: 114113,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.955278194281585,
                    0.0277846614949552
                ],
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
                isShowLogoInSearchResult35: true,
                publishedDate: 1569986916,
                isPremium: false,
                classifiedSkills: [
                    'Web Design',
                    'HTML/CSS'
                ],
                jobRequirement: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với Web services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
                objectID: '1170146',
                _highlightResult: {
                    jobTitle: {
                        value: 'Android <em>Developer</em> (Fresher/junior & Senior)',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Java',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Android Ndk',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Android Sdk',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: '<em>Web</em> Sevice',
                            matchLevel: 'partial',
                            fullyHighlighted: false,
                            matchedWords: [
                                'web'
                            ]
                        },
                        {
                            value: 'Lập Trình Android',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'ARIS Vietnam Co., Ltd',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobRequirement: {
                        value: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với <em>Web</em> services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-plane',
                        benefitName: 'Travel Opportunities',
                        benefitValue: 'Cơ hội On-site tại Mỹ, Nhật Bản',
                        benefitId: 9
                    },
                    {
                        benefitIconName: 'fa-glass',
                        benefitName: 'Team Activities',
                        benefitValue: 'Tham gia các kỳ nghỉ, các hoạt động tập thể của công ty như: bóng đá, cầu lông...',
                        benefitId: 10
                    }
                ],
                expiredDate: 1573059599,
                classifiedConfidenceRoles: [
                    0.625407761567872,
                    0.348106187241412
                ],
                visibilityDisplay: 1,
                jobTitle: 'Nhân Viên Lập Trình Web - Web Developer',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570590574,
                salaryMax: 1000,
                skills: [
                    'Docker Swarm',
                    'PHP',
                    'MVC',
                    'Nodejs'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'nhan-vien-lap-trinh-web-web-developer-1-1',
                company: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 500,
                timestamp: '20191009101153',
                priorityOrder35: 1570590574,
                locationVIs: [
                    'Hà Nội'
                ],
                classifiedRoles: [
                    'Backend Developer',
                    'Developer'
                ],
                jobSalary: 1000,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/ca/10211305.png',
                locationIds: [
                    24
                ],
                jobLevelId: 5,
                userId: 3735175,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590574,
                jobId: 1171835,
                companyId: 204566,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.955278194281585,
                    0.0277846614949552
                ],
                locations: [
                    'Ha Noi'
                ],
                jobDescription: '- Phát triển các tính năng, giải pháp phần mềm dạng Web cho lĩnh vực CAD/BIM xây dựng',
                isShowLogoInSearchResult35: true,
                publishedDate: 1570417775,
                isPremium: false,
                classifiedSkills: [
                    'Web Design',
                    'HTML/CSS'
                ],
                jobRequirement: '•\tCó kinh nghiệm lập trình các ứng dụng Web, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
                _geoloc: {
                    lng: 105.7824599,
                    lat: 21.030345
                },
                objectID: '1171835',
                _highlightResult: {
                    jobTitle: {
                        value: 'Nhân Viên Lập Trình <em>Web</em> - <em>Web</em> <em>Developer</em>',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Docker Swarm',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'PHP',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'MVC',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Nodejs',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '- Phát triển các tính năng, giải pháp phần mềm dạng <em>Web</em> cho lĩnh vực CAD/BIM xây dựng',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    },
                    jobRequirement: {
                        value: '•\tCó kinh nghiệm lập trình các ứng dụng <em>Web</em>, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Continuous learning and career growth',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-trophy',
                        benefitName: 'Awards',
                        benefitValue: 'Exciting challenges and rewarding recognitions',
                        benefitId: 5
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Creative workplace with international teams of talents',
                        benefitId: 1
                    }
                ],
                expiredDate: 1571331599,
                classifiedConfidenceRoles: [
                    0.495064760020936,
                    0.376693534151077
                ],
                visibilityDisplay: 0,
                jobTitle: 'Senior Front-End Developer',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570590355,
                salaryMax: 0,
                skills: [
                    'Software Engineering',
                    'HTML5',
                    'Front-End',
                    'Web Development',
                    'Angular'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'senior-front-end-developer-109',
                company: 'Gameloft',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 300,
                timestamp: '20191009101055',
                priorityOrder35: 1570590355,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Frontend Developer',
                    'Developer'
                ],
                jobSalary: 300,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 407579,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590355,
                jobId: 1162710,
                companyId: 1706,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.525817725191519,
                    0.168757187821785
                ],
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Front-End Developer to join our team of developers; working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End Developer works with web developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end web technologies.\r\n•\tGood understanding of Web analytics and SEO techniques and how to implement them.\r\n•\tOptimizes web applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                isShowLogoInSearchResult35: true,
                publishedDate: 1568689556,
                isPremium: false,
                classifiedSkills: [
                    'JavaScript',
                    'HTML/CSS'
                ],
                jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for Web sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive Web Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
                objectID: '1162710',
                _highlightResult: {
                    jobTitle: {
                        value: 'Senior Front-End <em>Developer</em>',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Software Engineering',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'HTML5',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Front-End',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: '<em>Web</em> Development',
                            matchLevel: 'partial',
                            fullyHighlighted: false,
                            matchedWords: [
                                'web'
                            ]
                        },
                        {
                            value: 'Angular',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Gameloft',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Front-End <em>Developer</em> to join our team of developers; working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End <em>Developer</em> works with <em>web</em> developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end <em>web</em> technologies.\r\n•\tGood understanding of <em>Web</em> analytics and SEO techniques and how to implement them.\r\n•\tOptimizes <em>web</em> applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    jobRequirement: {
                        value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for <em>Web</em> sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive <em>Web</em> Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Continuous learning and career growth',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-trophy',
                        benefitName: 'Awards',
                        benefitValue: 'Exciting challenges and rewarding recognitions',
                        benefitId: 5
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Creative workplace with international teams of talents',
                        benefitId: 1
                    }
                ],
                expiredDate: 1571331599,
                classifiedConfidenceRoles: [
                    0.419200043232248,
                    0.256194138237985
                ],
                visibilityDisplay: 0,
                jobTitle: 'Senior PHP Developer',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570590318,
                salaryMax: 0,
                skills: [
                    'Software Engineering',
                    'Back-End',
                    'PHP',
                    'Scrum',
                    'Web Development'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'senior-php-developer-189',
                company: 'Gameloft',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 300,
                timestamp: '20191009101044',
                priorityOrder35: 1570590318,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Engineering Manager',
                    'Backend Developer'
                ],
                jobSalary: 300,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 407579,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590318,
                jobId: 1162711,
                companyId: 1706,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.350894457428986,
                    0.202624349623947
                ],
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Back-End Developer to join our team of developers, working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End Developer is responsible for server-side web application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic web applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tInitiate and lead development of internal web tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                isShowLogoInSearchResult35: true,
                publishedDate: 1568689519,
                isPremium: false,
                classifiedSkills: [
                    'PHP',
                    'Java'
                ],
                jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
                _geoloc: {
                    lng: 106.7131842,
                    lat: 10.8090852
                },
                objectID: '1162711',
                _highlightResult: {
                    jobTitle: {
                        value: 'Senior PHP <em>Developer</em>',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Software Engineering',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Back-End',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'PHP',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Scrum',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: '<em>Web</em> Development',
                            matchLevel: 'partial',
                            fullyHighlighted: false,
                            matchedWords: [
                                'web'
                            ]
                        }
                    ],
                    company: {
                        value: 'Gameloft',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Back-End <em>Developer</em> to join our team of developers, working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End <em>Developer</em> is responsible for server-side <em>web</em> application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic <em>web</em> applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tInitiate and lead development of internal <em>web</em> tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    jobRequirement: {
                        value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-check-square-o',
                        benefitName: 'Others',
                        benefitValue: 'Dynamic & Friendly working environment',
                        benefitId: 15
                    },
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Overseas Training',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Competitive salary and bonus up to 300%',
                        benefitId: 1
                    }
                ],
                expiredDate: 1571417999,
                classifiedConfidenceRoles: [
                    0.424526788682568,
                    0.280813874503942
                ],
                visibilityDisplay: 1,
                jobTitle: '[URGENT] Web Developer',
                categoryVIs: [
                    'Công nghệ cao',
                    'IT - Phần mềm',
                    'IT-Phần cứng/Mạng'
                ],
                priorityOrder: 1570590222,
                salaryMax: 1500,
                skills: [
                    'Java',
                    'Weblogic',
                    'Restful Api',
                    'HTML',
                    'Spring'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                isShowLogoInSearchResult66: true,
                alias: 'urgent-web-developer-2-1',
                priorityOrder55: 1570590222,
                company: 'Shinhan DS Vietnam Company Limited',
                categories: [
                    'IT - Hardware/Networking',
                    'High Technology',
                    'IT - Software'
                ],
                salaryMin: 500,
                timestamp: '20191009101028',
                priorityOrder35: 1570590222,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Frontend Developer',
                    'Backend Developer'
                ],
                jobSalary: 1500,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/92/10668657.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 5191438,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590222,
                jobId: 1163358,
                companyId: 284536,
                categoryIds: [
                    66,
                    35,
                    55
                ],
                classifiedConfidenceSkills: [
                    0.549274909799395,
                    0.197273371406292
                ],
                isShowLogoInSearchResult55: true,
                priorityOrder66: 1570590222,
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was Developer).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to Web Developers and Maintain Administrator Web page.\r\n- Contribute to develop Web application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
                isShowLogoInSearchResult35: true,
                publishedDate: 1568775822,
                isPremium: false,
                classifiedSkills: [
                    'Java',
                    'HTML/CSS'
                ],
                jobRequirement: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for Web Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
                _geoloc: {
                    lng: 106.6974318,
                    lat: 10.7827533
                },
                objectID: '1163358',
                _highlightResult: {
                    jobTitle: {
                        value: '[URGENT] <em>Web</em> <em>Developer</em>',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Java',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Weblogic',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Restful Api',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'HTML',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Spring',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Shinhan DS Vietnam Company Limited',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was <em>Developer</em>).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to <em>Web</em> Developers and Maintain Administrator <em>Web</em> page.\r\n- Contribute to develop <em>Web</em> application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    jobRequirement: {
                        value: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for <em>Web</em> Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            }
        ]
    };
    console.log(jobSearch.hits);

    for (let i = 0; i < jobSearch.hits.length; i++) {
        var { jobTitle, locations, salaryMax, salaryMin, skills, jobRequirement } = (jobSearch.hits)[i];
        if (salaryMax == 0) {
            salaryMax = salaryMin;
        };
        console.log(`-----------------------------------
Job: ${jobTitle}
Locations: ${locations}
Salary: ${salaryMin} ~ ${salaryMax}
Skills: ${skills}
Job Requirements: ${jobRequirement}`);
    };
};

//3.1 Outermost layer is Object
//3.2 is Array

//4.
function bai4() {
    var dictionary =
    {
        Keyword:
            [
                `debug`,
                `done`,
                `defect`,
                `pm`,
                `ui/ux`,
            ],
        Explanation:
            [
                `The process of figuring out why your program has a certain error and how to fix it`,
                `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
                `The formal word for ‘error’`,
                `The short version of Project Manager, the person in charge of the final result of a project`,
                `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`,
            ]
    }

    alert('Hi there, this is dev dictionary');
    while (true) {
        let check = false;
        let inputkeyword = prompt('Enter a keyword');
        for (let i = 0; i < dictionary.Keyword.length; i++) {
            if (inputkeyword == dictionary.Keyword[i]) {
                alert(`${inputkeyword}
${dictionary.Explanation[i]}`);
                check = true;
                break;
            } else {
                check = false;
            }
        }
        if (check == false) {
            let newexp = prompt(`We could not find your word,leave your explanation`);
            if (newexp !== '') {
                dictionary.Keyword.push(inputkeyword);
                dictionary.Explanation.push(newexp);
                alert('Done');
            };
        };
    };
};


//5.
var phoneproducts =
    [
        {
            Name: 'Xiaomi portable charger 20000mah',
            Brand: 'Xiaomi',
            Price: '428',
            Colors: 'White',
            Category: 'charger',
        },
        {
            Name: 'VSmart Active 1',
            Brand: 'VSmart',
            Price: '5487',
            Colors: 'Black',
            Category: 'phone',
        },
        {
            Name: 'IPhone X',
            Brand: 'Apple',
            Price: '21490',
            Colors: 'Gray',
            Category: 'phone',
        },
        {
            Name: 'Samsung Galaxy A9',
            Brand: 'Samsung',
            Price: '8490',
            Colors: 'Blue',
            Category: 'phone',
        },
    ];
function bai5_1() {
    for (let product of phoneproducts) {
        console.log(`---------------------------
Name: ${product.Name}
Price: ${product.Price}`);
    };
};

function bai5_2() {
    for (let i = 0; i < phoneproducts.length; i++) {
        console.log(`#${i + 1}. ${phoneproducts[i].Name}
Price: ${phoneproducts[i].Price}`);
    };
    let i = Number(prompt('Enter product position')) - 1;
    for (let property in phoneproducts[i]) {
        console.log(`${property}: ${phoneproducts[i][property]}`);
    };
};

function bai5_3() {
    let categoryinput = prompt('Enter your category');
    for (let i = 0; i < phoneproducts.length; i++) {
        if (categoryinput == phoneproducts[i].Category) {
            console.log(`---------------------
Name: ${phoneproducts[i].Name}
Price: ${phoneproducts[i].Price}`);
        };
    };
};

function bai5_4() {
    let Providers =
        [
            ['Phukienzero', 'Dientucc'],
            ['Tgdd', 'Ddghn', 'VhStore'],
            ['Tgdd'],
            ['Tgdd'],
        ];
    for (let i = 0; i < Providers.length; i++) {
        phoneproducts[i].Providers = Providers[i];
    }
    for (let i = 0; i < phoneproducts.length; i++) {
        console.log(`#${i + 1}. ${phoneproducts[i].Name}
    Price: ${phoneproducts[i].Price}
    Providers: ${phoneproducts[i].Providers.join(' ')}`);
    };
};

function bai5_5() {
    bai5_4();
    console.clear();
    let providerinput = prompt('Enter provider');
    for (let i = 0; i < phoneproducts.length; i++) {
        for (let j = 0; j < phoneproducts[i].Providers.length; j++)
            if (providerinput == (phoneproducts[i].Providers)[j]) {
                console.log(`---------------------`);
                for (let property in phoneproducts[i]) {
                    console.log(`${property}: ${phoneproducts[i][property]}`);
                };
            };
    };
};


//6.

let LearnTask =
{
    Task: ['HTML', 'CSS', 'Basics of Javascript', 'Node Package Manager (npm)', 'Git'],
    Process: [false, false, false, false, false],
};
function printall() {
    console.clear();
    console.log('Hi there, this is your learning tasks to font-end developer career:');
    for (let i = 0; i < LearnTask.Task.length; i++) {
        console.log(`${i + 1}.  ${LearnTask.Task[i]}
    Complete: ${LearnTask.Process[i]}`);
    };
};

function printbetter() {
    console.clear();
    console.log('Hi there, this is your learning tasks to font-end developer career:');
    for (let i = 0; i < LearnTask.Task.length; i++) {
        if (LearnTask.Process[i] == false) {
            console.log(`${i + 1}. [ ] ${LearnTask.Task[i]}`);
        } else {
            console.log(`${i + 1}. [x] ${LearnTask.Task[i]}`)
        };
    };
};

function bai6() {
    while (true) {
        printbetter();
        let comnand = prompt('Enter your command: New, Delete, Update, Complete').toLowerCase();
        if (comnand == 'new') {
            let newtask = prompt('Enter new task');
            LearnTask.Task.push(newtask);
            LearnTask.Process.push(false);
            printbetter();
        }
        else if (comnand == 'delete') {
            let deletetask = Number(prompt(`Enter position`)) - 1;
            if (deletetask < 0 || deletetask > LearnTask.Task.length || Math.floor(deletetask) !== deletetask) {
                alert('Task not found');
            } else {
                LearnTask.Task.splice(deletetask, 1);
                LearnTask.Process.splice(deletetask, 1);
                printbetter();
            };
        }
        else if (comnand == 'update') {
            let updatetask = Number(prompt(`Enter position`)) - 1;
            if (updatetask < 0 || updatetask > LearnTask.Task.length || Math.floor(updatetask) !== updatetask) {
                alert('Task not found');
            } else {
                let renametask = prompt('Enter new title');
                LearnTask.Task[updatetask] = renametask;
            };
            printbetter();
        }
        else if (comnand == 'complete') {
            let completetask = Number(prompt('Enter position')) - 1;
            if (completetask < 0 || completetask > LearnTask.Task.length || Math.floor(completetask) !== completetask) {
                alert('Task not found');
            } else {
                LearnTask.Process[completetask] = true;
            };
            printbetter();
        }
        else {
            alert('Invalid command');
        };
    };
};


//7.

function bai7__12() {
    clear();
    setshape("butterfly");
    var pos =
    {
        x: 200,
        y: 50,
    };
    function moveto(destination) {
        penup();
        fd(destination.y);
        rt(90);
        fd(destination.x);
        lt(90);
        pendown();
    };
    var square =
    {
        shape: 'square',
        x: 100,
        y: 50,
        width: 20,
    };

    function drawsquare(namesquare) {
        home();
        moveto(namesquare);
        for (let i = 1; i <= 4; i++) {
            fd(namesquare.width);
            rt(90);
        };
    };


    var rect =
    {
        shape: 'rect',
        x: 100,
        y: 50,
        width: 20,
        height: 40,
    };

    function drawrect(namerect) {
        home();
        moveto(namerect);
        fd(namerect.height);
        rt(90);
        fd(namerect.width);
        rt(90);
        fd(namerect.height);
        rt(90);
        fd(namerect.width);
        rt(90);
    };
    var circle =
    {
        shape: 'circle',
        x: 100,
        y: 50,
        radius: 30,
    };
    function drawcircle(structure) {
        home();
        moveto(structure);
        lt(90);
        penup();
        fd(structure.radius);
        pendown();
        rt(90);
        for (let i = 1; i <= 360; i++) {
            fd(structure.radius * 2 * Math.PI / 360);
            rt(1);
        };
    };
    function draw(structure) {
        if (structure.shape == 'square') {
            drawsquare(structure);
        }
        else if (structure.shape == 'rect') {
            drawrect(structure);
        }
        else if (structure.shape == 'circle') {
            drawcircle(structure);
        };
    };

    const cmds = [
        {
            shape: 'circle',
            x: 0,
            y: -20,
            radius: 60,
        },
        {
            shape: 'circle',
            x: 0,
            y: 80,
            radius: 40,
        },
        {
            shape: 'circle',
            x: -75,
            y: 10,
            radius: 20,
        },
        {
            shape: 'circle',
            x: 75,
            y: 10,
            radius: 20,
        },
        {
            shape: 'square',
            x: -65,
            y: -100,
            width: 30,
        },
        {
            shape: 'square',
            x: 38,
            y: -100,
            width: 30,
        },

        {
            shape: 'rect',
            x: -30,
            y: 80,
            width: 20,
            height: 4
        },
        {
            shape: 'rect',
            x: 10,
            y: 80,
            width: 20,
            height: 4
        },
        {
            shape: 'rect',
            x: -10,
            y: 50,
            width: 20,
            height: 6
        },
        {
            shape: 'square',
            x: 500,
            y: 500,
            width: 20,
        },
    ];

    for (let i = 0; i < cmds.length; i++) {
        draw(cmds[i]);
    };
};

//13.
//14.
//15.

var jobdata = {
    hits: [
        {
            benefits: [
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: '14 tháng lương, đánh giá tăng lương 2 lần/ năm',
                    benefitId: 1
                },
                {
                    benefitIconName: 'fa-user-md',
                    benefitName: 'Healthcare Plan',
                    benefitValue: 'Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty',
                    benefitId: 2
                },
                {
                    benefitIconName: 'fa-file-image-o',
                    benefitName: 'Paid Leave',
                    benefitValue: 'Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến',
                    benefitId: 3
                }
            ],
            expiredDate: 1572713999,
            classifiedConfidenceRoles: [
                0.478965416077008,
                0.461663685615174
            ],
            visibilityDisplay: 1,
            jobTitle: '02 JAVA Web Developer (Hà Nội)',
            categoryVIs: [
                'Công nghệ cao',
                'IT - Phần mềm',
                'Internet/Online Media'
            ],
            priorityOrder: 1570593423,
            salaryMax: 1000,
            skills: [
                'Hibernate',
                'Spring MVC',
                'JavaScript',
                'Struts',
                'Spring Boots'
            ],
            isSalaryVisible: true,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            isShowLogoInSearchResult66: true,
            alias: '02-java-web-developer-ha-noi-1-1-1-1',
            company: 'Yumeshin Vietnam',
            categories: [
                'Internet/Online Media',
                'High Technology',
                'IT - Software'
            ],
            salaryMin: 500,
            timestamp: '20191009111048',
            priorityOrder35: 1570593423,
            priorityOrder57: 1570593423,
            locationVIs: [
                'Hà Nội'
            ],
            classifiedRoles: [
                'Developer',
                'Backend Developer'
            ],
            jobSalary: 1000,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/8c/10756982.png',
            locationIds: [
                24
            ],
            jobLevelId: 5,
            userId: 5531713,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570593423,
            jobId: 1170673,
            companyId: 298378,
            categoryIds: [
                66,
                35,
                57
            ],
            classifiedConfidenceSkills: [
                0.955278194281585,
                0.0277846614949552
            ],
            priorityOrder66: 1570593423,
            locations: [
                'Ha Noi'
            ],
            jobDescription: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
            isShowLogoInSearchResult35: true,
            isShowLogoInSearchResult57: true,
            publishedDate: 1570075024,
            isPremium: false,
            classifiedSkills: [
                'Web Design',
                'HTML/CSS'
            ],
            jobRequirement: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
            _geoloc: {
                lng: 105.7837524,
                lat: 21.0168415
            },
            objectID: '1170673',
            _highlightResult: {
                jobTitle: {
                    value: '02 JAVA <em>Web</em> <em>Developer</em> (Hà Nội)',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Hibernate',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Spring MVC',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'JavaScript',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Struts',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Spring Boots',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Yumeshin Vietnam',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobRequirement: {
                    value: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
                    matchLevel: 'none',
                    matchedWords: []
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Tham gia các khoá đào tạo Quản lý, Kỹ năng mềm',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-plane',
                    benefitName: 'Travel Opportunities',
                    benefitValue: 'Company Trip hàng năm (Đã đi: Côn Đảo, Phú Quốc, Sapa,..), Khám sức khoẻ ĐK tại Victoria HealthCare',
                    benefitId: 9
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Lương thưởng theo năng lực',
                    benefitId: 1
                }
            ],
            expiredDate: 1572627599,
            classifiedConfidenceRoles: [
                0.704634290870941,
                0.198554087716295
            ],
            visibilityDisplay: 0,
            jobTitle: 'Android Developer (Fresher/junior & Senior)',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570591715,
            salaryMax: 0,
            skills: [
                'Java',
                'Android Ndk',
                'Android Sdk',
                'Web Sevice',
                'Lập Trình Android'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'android-developer-fresher-junior-senior-1-1-1',
            company: 'ARIS Vietnam Co., Ltd',
            categories: [
                'IT - Software'
            ],
            salaryMin: 300,
            timestamp: '20191009102846',
            priorityOrder35: 1570591715,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Mobile Developer',
                'Developer'
            ],
            jobSalary: 300,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/40/6215187.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 2484337,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570591715,
            jobId: 1170146,
            companyId: 114113,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.955278194281585,
                0.0277846614949552
            ],
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
            isShowLogoInSearchResult35: true,
            publishedDate: 1569986916,
            isPremium: false,
            classifiedSkills: [
                'Web Design',
                'HTML/CSS'
            ],
            jobRequirement: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với Web services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
            objectID: '1170146',
            _highlightResult: {
                jobTitle: {
                    value: 'Android <em>Developer</em> (Fresher/junior & Senior)',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Java',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Android Ndk',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Android Sdk',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: '<em>Web</em> Sevice',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    },
                    {
                        value: 'Lập Trình Android',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'ARIS Vietnam Co., Ltd',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobRequirement: {
                    value: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với <em>Web</em> services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-plane',
                    benefitName: 'Travel Opportunities',
                    benefitValue: 'Cơ hội On-site tại Mỹ, Nhật Bản',
                    benefitId: 9
                },
                {
                    benefitIconName: 'fa-glass',
                    benefitName: 'Team Activities',
                    benefitValue: 'Tham gia các kỳ nghỉ, các hoạt động tập thể của công ty như: bóng đá, cầu lông...',
                    benefitId: 10
                }
            ],
            expiredDate: 1573059599,
            classifiedConfidenceRoles: [
                0.625407761567872,
                0.348106187241412
            ],
            visibilityDisplay: 1,
            jobTitle: 'Nhân Viên Lập Trình Web - Web Developer',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570590574,
            salaryMax: 1000,
            skills: [
                'Docker Swarm',
                'PHP',
                'MVC',
                'Nodejs'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'nhan-vien-lap-trinh-web-web-developer-1-1',
            company: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
            categories: [
                'IT - Software'
            ],
            salaryMin: 500,
            timestamp: '20191009101153',
            priorityOrder35: 1570590574,
            locationVIs: [
                'Hà Nội'
            ],
            classifiedRoles: [
                'Backend Developer',
                'Developer'
            ],
            jobSalary: 1000,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/ca/10211305.png',
            locationIds: [
                24
            ],
            jobLevelId: 5,
            userId: 3735175,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590574,
            jobId: 1171835,
            companyId: 204566,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.955278194281585,
                0.0277846614949552
            ],
            locations: [
                'Ha Noi'
            ],
            jobDescription: '- Phát triển các tính năng, giải pháp phần mềm dạng Web cho lĩnh vực CAD/BIM xây dựng',
            isShowLogoInSearchResult35: true,
            publishedDate: 1570417775,
            isPremium: false,
            classifiedSkills: [
                'Web Design',
                'HTML/CSS'
            ],
            jobRequirement: '•\tCó kinh nghiệm lập trình các ứng dụng Web, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
            _geoloc: {
                lng: 105.7824599,
                lat: 21.030345
            },
            objectID: '1171835',
            _highlightResult: {
                jobTitle: {
                    value: 'Nhân Viên Lập Trình <em>Web</em> - <em>Web</em> <em>Developer</em>',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Docker Swarm',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'PHP',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'MVC',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Nodejs',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '- Phát triển các tính năng, giải pháp phần mềm dạng <em>Web</em> cho lĩnh vực CAD/BIM xây dựng',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                },
                jobRequirement: {
                    value: '•\tCó kinh nghiệm lập trình các ứng dụng <em>Web</em>, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Continuous learning and career growth',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-trophy',
                    benefitName: 'Awards',
                    benefitValue: 'Exciting challenges and rewarding recognitions',
                    benefitId: 5
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Creative workplace with international teams of talents',
                    benefitId: 1
                }
            ],
            expiredDate: 1571331599,
            classifiedConfidenceRoles: [
                0.495064760020936,
                0.376693534151077
            ],
            visibilityDisplay: 0,
            jobTitle: 'Senior Front-End Developer',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570590355,
            salaryMax: 0,
            skills: [
                'Software Engineering',
                'HTML5',
                'Front-End',
                'Web Development',
                'Angular'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'senior-front-end-developer-109',
            company: 'Gameloft',
            categories: [
                'IT - Software'
            ],
            salaryMin: 300,
            timestamp: '20191009101055',
            priorityOrder35: 1570590355,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Frontend Developer',
                'Developer'
            ],
            jobSalary: 300,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 407579,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590355,
            jobId: 1162710,
            companyId: 1706,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.525817725191519,
                0.168757187821785
            ],
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Front-End Developer to join our team of developers; working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End Developer works with web developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end web technologies.\r\n•\tGood understanding of Web analytics and SEO techniques and how to implement them.\r\n•\tOptimizes web applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
            isShowLogoInSearchResult35: true,
            publishedDate: 1568689556,
            isPremium: false,
            classifiedSkills: [
                'JavaScript',
                'HTML/CSS'
            ],
            jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for Web sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive Web Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
            objectID: '1162710',
            _highlightResult: {
                jobTitle: {
                    value: 'Senior Front-End <em>Developer</em>',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Software Engineering',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'HTML5',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Front-End',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: '<em>Web</em> Development',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    },
                    {
                        value: 'Angular',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Gameloft',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Front-End <em>Developer</em> to join our team of developers; working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End <em>Developer</em> works with <em>web</em> developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end <em>web</em> technologies.\r\n•\tGood understanding of <em>Web</em> analytics and SEO techniques and how to implement them.\r\n•\tOptimizes <em>web</em> applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                jobRequirement: {
                    value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for <em>Web</em> sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive <em>Web</em> Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Continuous learning and career growth',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-trophy',
                    benefitName: 'Awards',
                    benefitValue: 'Exciting challenges and rewarding recognitions',
                    benefitId: 5
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Creative workplace with international teams of talents',
                    benefitId: 1
                }
            ],
            expiredDate: 1571331599,
            classifiedConfidenceRoles: [
                0.419200043232248,
                0.256194138237985
            ],
            visibilityDisplay: 0,
            jobTitle: 'Senior PHP Developer',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570590318,
            salaryMax: 0,
            skills: [
                'Software Engineering',
                'Back-End',
                'PHP',
                'Scrum',
                'Web Development'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'senior-php-developer-189',
            company: 'Gameloft',
            categories: [
                'IT - Software'
            ],
            salaryMin: 300,
            timestamp: '20191009101044',
            priorityOrder35: 1570590318,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Engineering Manager',
                'Backend Developer'
            ],
            jobSalary: 300,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 407579,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590318,
            jobId: 1162711,
            companyId: 1706,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.350894457428986,
                0.202624349623947
            ],
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Back-End Developer to join our team of developers, working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End Developer is responsible for server-side web application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic web applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tInitiate and lead development of internal web tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
            isShowLogoInSearchResult35: true,
            publishedDate: 1568689519,
            isPremium: false,
            classifiedSkills: [
                'PHP',
                'Java'
            ],
            jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
            _geoloc: {
                lng: 106.7131842,
                lat: 10.8090852
            },
            objectID: '1162711',
            _highlightResult: {
                jobTitle: {
                    value: 'Senior PHP <em>Developer</em>',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Software Engineering',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Back-End',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'PHP',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Scrum',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: '<em>Web</em> Development',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                ],
                company: {
                    value: 'Gameloft',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Back-End <em>Developer</em> to join our team of developers, working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End <em>Developer</em> is responsible for server-side <em>web</em> application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic <em>web</em> applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tInitiate and lead development of internal <em>web</em> tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                jobRequirement: {
                    value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
                    matchLevel: 'none',
                    matchedWords: []
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-check-square-o',
                    benefitName: 'Others',
                    benefitValue: 'Dynamic & Friendly working environment',
                    benefitId: 15
                },
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Overseas Training',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Competitive salary and bonus up to 300%',
                    benefitId: 1
                }
            ],
            expiredDate: 1571417999,
            classifiedConfidenceRoles: [
                0.424526788682568,
                0.280813874503942
            ],
            visibilityDisplay: 1,
            jobTitle: '[URGENT] Web Developer',
            categoryVIs: [
                'Công nghệ cao',
                'IT - Phần mềm',
                'IT-Phần cứng/Mạng'
            ],
            priorityOrder: 1570590222,
            salaryMax: 1500,
            skills: [
                'Java',
                'Weblogic',
                'Restful Api',
                'HTML',
                'Spring'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            isShowLogoInSearchResult66: true,
            alias: 'urgent-web-developer-2-1',
            priorityOrder55: 1570590222,
            company: 'Shinhan DS Vietnam Company Limited',
            categories: [
                'IT - Hardware/Networking',
                'High Technology',
                'IT - Software'
            ],
            salaryMin: 500,
            timestamp: '20191009101028',
            priorityOrder35: 1570590222,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Frontend Developer',
                'Backend Developer'
            ],
            jobSalary: 1500,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/92/10668657.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 5191438,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590222,
            jobId: 1163358,
            companyId: 284536,
            categoryIds: [
                66,
                35,
                55
            ],
            classifiedConfidenceSkills: [
                0.549274909799395,
                0.197273371406292
            ],
            isShowLogoInSearchResult55: true,
            priorityOrder66: 1570590222,
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was Developer).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to Web Developers and Maintain Administrator Web page.\r\n- Contribute to develop Web application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
            isShowLogoInSearchResult35: true,
            publishedDate: 1568775822,
            isPremium: false,
            classifiedSkills: [
                'Java',
                'HTML/CSS'
            ],
            jobRequirement: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for Web Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
            _geoloc: {
                lng: 106.6974318,
                lat: 10.7827533
            },
            objectID: '1163358',
            _highlightResult: {
                jobTitle: {
                    value: '[URGENT] <em>Web</em> <em>Developer</em>',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Java',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Weblogic',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Restful Api',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'HTML',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Spring',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Shinhan DS Vietnam Company Limited',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was <em>Developer</em>).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to <em>Web</em> Developers and Maintain Administrator <em>Web</em> page.\r\n- Contribute to develop <em>Web</em> application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                jobRequirement: {
                    value: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for <em>Web</em> Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        }
    ]
};

function bai15_1() {
    console.log('Job hits:');
    console.log(jobdata.hits);
};
function bai15_2() {
    console.log(jobdata.hits[0]);
};
function bai15_3() {
    var { jobTitle } = jobdata.hits[0];
    console.log(`First job title:
${jobTitle}`);
};
function bai15_4() {
    var { benefits } = jobdata.hits[0];
    console.log(benefits);
};
function bai15_5() {
    console.log('First job hit benefit:');
    for (let i = 0; i < jobdata.hits[0].benefits.length; i++) {
        var { benefitValue } = jobdata.hits[0].benefits[i];
        console.log('- ' + benefitValue);
    };
};


function bai15_6() {
    for (let i = 0; i < jobdata.hits.length; i++) {
        var { jobTitle } = jobdata.hits[i];
        console.log(`---------------------------------
${jobTitle}`);
        console.log(`Benefits: `);
        for (let j = 0; j < jobdata.hits[i].benefits.length; j++) {
            var { benefitValue } = jobdata.hits[i].benefits[j];
            console.log('- ' + benefitValue);
        };
    };
};

function bai15_7() {
    for (let i = 0; i < jobdata.hits.length; i++) {
        var { jobTitle, locations, salaryMax, salaryMin, skills, benefits } = jobdata.hits[i];
        if (salaryMax == 0) { salaryMax = salaryMin };
        console.log(`---------------------------------
Title: ${jobTitle}
Salary: ${salaryMin} ~ ${salaryMax}
Locations:
- ${locations}
Skills:`);
        for (let k = 0; k < skills.length; k++) {
            console.log('- ' + skills[k]);
        }
        console.log(`Benefits:`)
        for (let j = 0; j < benefits.length; j++) {
            var { benefitValue } = benefits[j];
            console.log('- ' + benefitValue);
        };
    };
};

//16.
const oldData = {
    firedRice: {
        Price: 30,
        vnName: `Com rang dua bo`,
    },
    noddle: {
        price: 20,
        vnName: `My tom chanh`,
    },
    pho: {
        price: 35,
        vnName: `Pho bo tai chin`,
    },
};

function bai16() {
    var { noddle, ...foods } = oldData;
    var newdata = { ...foods };
    console.log(newdata);
};