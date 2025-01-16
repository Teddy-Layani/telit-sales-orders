import { useLocale } from 'vuetify';

export const useConstants = () => {
    const { t } = useLocale();

    const emailColumns = [
        { title: `${t('table.primary')}`, value: 'isPrimary', align: 'right' },
        { title: `${t('table.email')}`, value: 'email', align: 'right' },
        { title: `${t('table.actions')}`, value: 'actions', align: 'right' }
    ];
    const crmStatuses = [
        { value: '', title: `${t('crmStatuses.undefined')}` },
        { value: '2', title: `${t('crmStatuses.active')}` },
        { value: '3', title: `${t('crmStatuses.block')}` },
        { value: '4', title: `${t('crmStatuses.obsolete')}` }
    ]; // Text for display and corresponding values

    const phoneColumns = [
        { title: `${t('table.primary')}`, value: 'isPrimary', align: 'right' },
        { title: `${t('table.phoneNumber')}`, value: 'number', align: 'right' },
        { title: `${t('table.actions')}`, value: 'actions', align: 'right' }
    ];
    const segmentColumns = [
        { title: `${t('table.name')}`, value: 'name', align: 'right' },
        { title: `${t('table.updated')}`, value: 'updated', align: 'right' },
        { title: `${t('table.value')}`, value: 'value', align: 'right' }
    ];
    const initialCustData = {
        viewId: '',
        docSize: 0,
        _id: '',
        attributes: {
            lastName: '',
            data: {
                RegistrationBK: '',
                test2: [
                    {
                        CarNum: '',
                        AccountNum: ''
                    }
                ],
                StreetMAIN: '',
                StreetNumberMAIN: '',
                cityMAIN: '',
                EntranceMAIN: '',
                ApartmentMAIN: '',
                Street2: '',
                StreetNumber2: '',
                city2: '',
                Entrance2: '',
                Apartment2: '',
                Street3: '',
                StreetNumber3: '',
                city3: '',
                Entrance3: '',
                Apartment3: '',
                IsAvailable: false,
                EmailStatus: '',
                RegistrationJoe: ''
            },
            crmStatus: '',
            correspondenceLanguage: '',
            cdpId: [''],
            ciamId: [''],
            phones: [
                {
                    number: '',
                    isPrimary: false
                }
            ],
            language: '',
            primaryCdpId: '',
            birthDate: '',
            emails: [
                {
                    isPrimary: false,
                    email: ''
                }
            ],
            crmObjectId: '',
            firstName: '',
            primaryPhone: '',
            crmId: [''],
            masterDataId: [''],
            primaryEmail: ''
        },
        relationships: [],
        activityIndicators: [],
        calculatedIndicators: [],
        predictiveIndicators: [],
        segments: [
            {
                name: '',
                value: '',
                updated: ''
            }
        ],
        updatedTimestamp: 0,
        updated: '',
        created: '',
        lastSeen: '',
        firstSeen: '',
        privacy: {
            purposes: [
                {
                    purposeId: '',
                    externalId: '',
                    status: '',
                    date: ''
                }
            ],
            subscriptions: []
        },
        milestones: [],
        journeys: [
            {
                id: '',
                updated: ''
            }
        ],
        matchRuleIds: ['']
    };

    return {
        phoneColumns,
        emailColumns,
        crmStatuses,
        initialCustData,
        segmentColumns
    };
};
