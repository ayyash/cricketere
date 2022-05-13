import { Injectable } from '@angular/core';
import { Config } from '../config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetParamsAsString } from '../core/common';
import { IProject, Project, IListOptions, IList, ListOptions } from '../core/services';



@Injectable({providedIn: 'root'})
export class ProjectService {

    private _listUrl = Config.API.project.list;
    private _detailsUrl = Config.API.project.details;
    private _createUrl = Config.API.project.create;
    private _saveUrl = Config.API.project.save;
    private _deleteUrl = Config.API.project.delete;

    constructor(private _http: HttpClient) {

    }

    GetProjects(options: IListOptions = {}): Observable<IList<IProject>> {
        const params = GetParamsAsString(ListOptions.MapSearchListOptions(options));
        const _url = this._listUrl.replace(':options', params);

        return this._http.get(_url).pipe(
            map(response => {
                return Project.NewList(<any>response);
            })
        );
    }


    GetProject(id: string): Observable<IProject> {
        const _url = this._detailsUrl.replace(':id', id);
        return this._http.get(_url).pipe(
            map(response => {
                return Project.NewInstance(response);
            })
        );

    }

    CreateProject(project: Partial<IProject>): Observable<IProject> {
        const _url = this._createUrl;
        const data = Project.PrepCreate(project);
        // redoing this
        _debug(data, 'CreateProject data');

        return this._http.post(_url, data).pipe(
            map(response => {
                return Project.NewInstance(<any>response);
            })
        );
    }

    SaveProject(project: IProject): Observable<IProject> {
        const _url = this._saveUrl.replace(':id', project.id);
        const data = Project.PrepSave(project);
        _debug(data, 'SaveProject data');

        return this._http.put(_url, data).pipe(
            map(response => {
                return project;
            })
        );
    }

    DeleteProject(project: IProject): Observable<boolean> {
        const _url = this._deleteUrl.replace(':id', project.id);

        return this._http.delete(_url).pipe(
            map(response => {
                return true;
            })
        );
    }

}
