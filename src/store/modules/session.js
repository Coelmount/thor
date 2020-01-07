const state = {
    token: "",
    session_tenant_id: "",
    session_group_id:"",
    session_user_id:""
}

const getters = {
    defaultRoute(state){
        var defaultRoute = "";
        if(state.session_tenant_id == ""){
            return "";
        }else{
            if(state.session_group_id == ""){
                return "/tenants/"+state.session_tenant_id;
            }else{
                if(state.session_user_id == ""){
                    return "/tenants/"+state.session_tenant_id+"/groups/"+state.session_group_id;
                }else{
                    return "/tenants/"+state.session_tenant_id+"/groups/"+state.session_group_id+"/users/"+state.session_user_id;
                }
            }
        }
    }
}

const mutations = {
    processLogin(state,payload){
        state.token = payload.token;
        state.session_tenant_id = payload.ids.tenant_id || "";
        state.session_group_id = payload.ids.group_id || "";
        state.session_user_id = payload.ids.user_id || "";
    }
    
}

const actions = {
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}