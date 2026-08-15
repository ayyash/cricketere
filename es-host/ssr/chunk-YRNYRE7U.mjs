import './polyfills.server.mjs';
import {
  BehaviorSubject,
  Config,
  HttpErrorResponse,
  HttpEventType,
  HttpResponse,
  _global,
  catchError,
  clone,
  pipe,
  tap,
  throwError
} from "./chunk-ICBO6PTM.mjs";
import {
  __spreadValues
} from "./chunk-F3YYFOAS.mjs";

// src/app/core/gtm.ts
var EnumGtmSource;
(function(EnumGtmSource2) {
  EnumGtmSource2["ProductsList"] = "products list";
  EnumGtmSource2["ProductsRelatedList"] = "products related";
  EnumGtmSource2["ProjectsList"] = "projects list";
  EnumGtmSource2["EmployeesList"] = "employees list";
  EnumGtmSource2["ProductsDetail"] = "products detail";
  EnumGtmSource2["ProjectsDetail"] = "projects detail";
  EnumGtmSource2["EmployeesDetail"] = "employees detail";
  EnumGtmSource2["Anywhere"] = "anywhere";
  EnumGtmSource2["Homepage"] = "home";
  EnumGtmSource2["NavigationDesktop"] = "navigation desktop";
})(EnumGtmSource || (EnumGtmSource = {}));
var EnumGtmEvent;
(function(EnumGtmEvent2) {
  EnumGtmEvent2["Login"] = "garage_login";
  EnumGtmEvent2["Click"] = "garage_click";
  EnumGtmEvent2["NavClick"] = "garage_nav_click";
  EnumGtmEvent2["Search"] = "garage_search";
  EnumGtmEvent2["Filter"] = "gr_filter";
  EnumGtmEvent2["Sort"] = "garage_sort";
  EnumGtmEvent2["Next"] = "garage_next";
  EnumGtmEvent2["Upload"] = "garage_upload";
  EnumGtmEvent2["Cancel"] = "garage_cancel";
  EnumGtmEvent2["Reveal"] = "garage_reveal";
  EnumGtmEvent2["Details"] = "garage_view_item";
  EnumGtmEvent2["List"] = "garage_view_list";
  EnumGtmEvent2["Share"] = "garage_share";
  EnumGtmEvent2["PageView"] = "garage_page_view";
  EnumGtmEvent2["GroupClick"] = "garage_group_click";
  EnumGtmEvent2["Error"] = "garage_error";
})(EnumGtmEvent || (EnumGtmEvent = {}));
var EnumGtmMethod;
(function(EnumGtmMethod2) {
  EnumGtmMethod2["Google"] = "google";
  EnumGtmMethod2["Facebook"] = "facebook";
  EnumGtmMethod2["Twitter"] = "twitter";
  EnumGtmMethod2["LinkedIn"] = "linkedin";
  EnumGtmMethod2["Instagram"] = "instagram";
  EnumGtmMethod2["Pinterest"] = "pinterest";
  EnumGtmMethod2["Unknown"] = "unknown";
})(EnumGtmMethod || (EnumGtmMethod = {}));
var EnumGtmAction;
(function(EnumGtmAction2) {
  EnumGtmAction2["Click"] = "click";
  EnumGtmAction2["Drag"] = "drag";
})(EnumGtmAction || (EnumGtmAction = {}));
var EnumGtmGroup;
(function(EnumGtmGroup2) {
  EnumGtmGroup2["Login"] = "login";
  EnumGtmGroup2["Upload"] = "upload";
  EnumGtmGroup2["General"] = "general";
  EnumGtmGroup2["Navigation"] = "navigation";
})(EnumGtmGroup || (EnumGtmGroup = {}));
var GtmTracking = class _GtmTracking {
  static _values = {};
  static get Values() {
    return this._values;
  }
  static set Values(value) {
    this._values = __spreadValues(__spreadValues({}, this._values), value);
  }
  static Push(data) {
    if (_global["dataLayer"]) {
      dataLayer.push(data);
    }
  }
  static RegisterEvent(track, extra) {
    let data = {
      event: track.event,
      gr_track: __spreadValues({
        source: track.source
      }, extra)
    };
    _debug(data, "register event", "gtm");
    this.Push(data);
  }
  static SetValues(values) {
    let data = {
      gr_values: __spreadValues({}, values)
    };
    _debug(data, "Set GA value", "gtm");
    this.Push(data);
  }
  static Reset() {
    this.Push(function() {
      this.reset();
    });
    _GtmTracking.SetValues(_GtmTracking.Values);
  }
  static MapGroup(group, label) {
    return { group, label };
  }
  static MapPath(path) {
    return { "page_location": path };
  }
  static MapProjects(projects, position) {
    const items = projects.map(_GtmTracking.MapProject);
    if (position) {
      items[0].index = position;
    }
    return { items };
  }
  static MapProject(project, index) {
    return {
      item_name: project.title,
      item_id: project.id,
      item_category: project.category.key,
      index
    };
  }
  static MapProducts(products, position) {
    const items = products.map(_GtmTracking.MapProduct);
    const value = items.reduce((acc, item) => acc + parseFloat(item.price), 0);
    if (position) {
      items[0].index = position;
    }
    return { items, value };
  }
  static MapProduct(product, index) {
    return {
      item_name: product.name,
      item_id: product.id,
      price: product.price,
      currency: "AUD",
      index
    };
  }
  static MapSearch(keyword) {
    return { "search_term": keyword };
  }
  static MapLogin(method) {
    return { method };
  }
  static MapAction(action) {
    return { action };
  }
  static MapUser(user) {
    return {
      user: user.name,
      email: user.email
    };
  }
  static MapProfile(profile) {
    return {
      language: profile.language,
      country: profile.country
    };
  }
};

// src/app/models/error.model.ts
var UiError = (error) => {
  const e = {
    code: "Unknown",
    message: error,
    status: 0
  };
  if (error instanceof HttpErrorResponse) {
    e.message = error.message || "";
    e.status = error.status || 0;
    if (error.error?.errors?.length) {
      const errors = error.error.errors;
      e.message = errors.map((l) => l.message).join(". ");
      e.code = errors[0].code || "Unknown";
    }
  }
  return e;
};

// src/app/core/rxjs.operators.ts
var debug = (message, type) => {
  return pipe(tap({
    next: (nextValue) => {
      let value = nextValue;
      if (nextValue instanceof HttpResponse) {
        value = nextValue.body;
      }
      if (nextValue && nextValue.type !== HttpEventType.Sent) {
        _debug(value, message, type);
      }
    }
    // error: (error) => {
    //     let value = error;
    //     if (error instanceof HttpErrorResponse) {
    //         value = `${error.status} ${error.message}`;
    //     }
    //     _debug(value, message, 'e');
    // }
  }));
};
var catchAppError = (message) => {
  return pipe(catchError((error) => {
    const e = UiError(error);
    _debug(e, message, "e");
    return throwError(() => e);
  }));
};

// src/app/services/state.abstract.ts
var ListStateService = class {
  stateList = new BehaviorSubject([]);
  stateList$ = this.stateList.asObservable();
  constructor(level) {
    _seqlog("list state construct");
    if (level === "DEBUG") {
      this.stateList$ = this.stateList$.pipe(debug(this.constructor.name));
    }
  }
  get currentList() {
    return this.stateList.getValue();
  }
  SetList(list) {
    this.stateList.next(list);
    return this.stateList$;
  }
  appendList(list) {
    return this.SetList([...this.currentList, ...list]);
  }
  emptyList() {
    this.stateList.next([]);
  }
  addItem(item) {
    this.stateList.next([...this.currentList, item]);
  }
  prependItem(item) {
    this.stateList.next([item, ...this.currentList]);
  }
  editItem(item) {
    const currentList = [...this.currentList];
    const index = currentList.findIndex((n) => n.id === item.id);
    if (index > -1) {
      currentList[index] = clone(item);
      this.stateList.next(currentList);
    }
  }
  removeItem(item) {
    this.stateList.next(this.currentList.filter((n) => n.id !== item.id));
  }
};
var StateService = class {
  stateItem = new BehaviorSubject(null);
  stateItem$ = this.stateItem.asObservable();
  constructor(level) {
    _seqlog("state construct");
    if (!level) {
      this.stateItem$ = this.stateItem$.pipe(debug(this.constructor.name));
    }
  }
  get currentItem() {
    return this.stateItem.getValue();
  }
  // return ready observable
  SetState(item) {
    this.stateItem.next(item);
    return this.stateItem$;
  }
  UpdateState(item) {
    const newItem = __spreadValues(__spreadValues({}, this.currentItem), clone(item));
    this.stateItem.next(newItem);
    return this.stateItem$;
  }
  RemoveState() {
    this.stateItem.next(null);
  }
};

// src/app/models/list.model.ts
var ListOptions = class {
  static MapSearchListOptions(options) {
    return {
      q: options.keyword,
      c: options.country,
      p: options.page || 1,
      s: options.size || Config.Basic.defaultSize,
      cat: options.category?.id,
      public: options.isPublic === false ? -1 : options.isPublic === true ? 1 : 0
    };
  }
  static MapSeoOptions(options) {
    return {
      page: options.page || 1,
      category: options.category?.key
    };
  }
};
var DataList = class {
  mapper;
  NewDataList(dataset) {
    return {
      total: dataset.total,
      matches: dataset.items.map(this.mapper)
    };
  }
};

export {
  EnumGtmSource,
  EnumGtmEvent,
  EnumGtmGroup,
  GtmTracking,
  debug,
  catchAppError,
  ListStateService,
  StateService,
  ListOptions,
  DataList
};
